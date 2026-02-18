import { config } from '../config';

interface GitHubStats {
    repos: number;
    followers: number;
    following: number;
    stars: number;
}

interface GitHubEvent {
    created_at: string;
    type: string;
}

export const fetchGitHubStats = async (username: string = config.github.username): Promise<GitHubStats> => {
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // To get total stars, we need to fetch all repos. 
        // This can be heavy, so we limit to the first 100 for now or just fetch one page.
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposResponse.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const stars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);

        return {
            repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            stars: stars, // This is stars ON their repos, not starred BY them
        };
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return { repos: 0, followers: 0, following: 0, stars: 0 };
    }
};

export const fetchGitHubActivity = async (username: string = config.github.username): Promise<number[]> => {
    // Returns an array of activity intensity (0-1) for the last 364 days.
    // Since public API only returns recent events (300 limit), we'll fill the end of the array 
    // with real data and the rest with 0 or low random noise if requested, but better to be accurate.
    // Actually, for the visual effect of a "full year heatmap", we might need to simulate 
    // older data if we can't get it, or just show emptiness.
    // The user asked for "actual" activity, so we should prioritize accuracy.

    try {
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`); // Max 100 per page, up to 300 total
        if (!response.ok) throw new Error('Failed to fetch events');
        const events: GitHubEvent[] = await response.json();

        const activityMap = new Map<string, number>();

        events.forEach(event => {
            const date = event.created_at.split('T')[0];
            activityMap.set(date, (activityMap.get(date) || 0) + 1);
        });

        const days = [];
        const today = new Date();
        for (let i = 0; i < 364; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - (363 - i));
            const dateString = date.toISOString().split('T')[0];
            const count = activityMap.get(dateString) || 0;

            // Normalize count for opacity (e.g., 5+ events = 1.0)
            let intensity = count / 5;
            if (intensity > 1) intensity = 1;

            // For visual consistency with the "pixel" theme, if we have NO data for older days (limitations),
            // we might want to transparently show that.
            // However, the current component expects 0-1 values.
            days.push(intensity);
        }

        return days;
    } catch (error) {
        console.warn('Error fetching GitHub activity:', error);
        return new Array(364).fill(0);
    }
};
