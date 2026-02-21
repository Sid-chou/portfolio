import { useState, useEffect } from 'react';
import { fetchGitHubStats } from '../utils/github';
import { GitHubCalendar } from 'react-github-calendar';
import { config } from '../config';

type GithubActivityProps = {
    isDark: boolean;
};

export default function GithubActivity({ isDark }: GithubActivityProps) {
    const [stats, setStats] = useState({ repos: 0, followers: 0, stars: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const statsData = await fetchGitHubStats();
                setStats({
                    repos: statsData.repos,
                    followers: statsData.followers,
                    stars: statsData.stars
                });
            } catch (error) {
                console.error("Failed to load GitHub data", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const githubTheme = {
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
    };

    return (
        <section className="w-full mb-120" id="github">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="font-pixel text-sm text-primary tracking-widest uppercase">
          // GITHUB_ACTIVITY
                </h3>
                <div className="h-px bg-gray-800 flex-grow"></div>
            </div>
            <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-md p-6 md:p-8">
                {/* Real GitHub Contribution Calendar */}
                <div className="mb-6 w-full overflow-x-auto">
                    <GitHubCalendar
                        username={config.github.username}
                        colorScheme="dark"
                        theme={githubTheme}
                        fontSize={12}
                        blockSize={13}
                        blockMargin={3}
                        blockRadius={2}
                        labels={{
                            totalCount: '{{count}} contributions in the last year',
                        }}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="text-center mb-6">
                    <a
                        href={`https://github.com/${config.github.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#58a6ff] hover:underline transition-colors"
                    >
                        @{config.github.username}
                    </a>
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-4 border-t border-[#30363d]">
                    <div className="flex items-center gap-3">
                        <span className="text-[#8b949e] uppercase text-xs font-pixel tracking-wider">Public Repos</span>
                        <span className="text-[#c9d1d9] font-code text-xl bg-[#161b22] px-3 py-1 border border-[#30363d] rounded-md">
                            {loading ? '...' : stats.repos}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#8b949e] uppercase text-xs font-pixel tracking-wider">Stars Earned</span>
                        <span className="text-[#c9d1d9] font-code text-xl bg-[#161b22] px-3 py-1 border border-[#30363d] rounded-md">
                            {loading ? '...' : stats.stars}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#8b949e] uppercase text-xs font-pixel tracking-wider">Followers</span>
                        <span className="text-[#c9d1d9] font-code text-xl bg-[#161b22] px-3 py-1 border border-[#30363d] rounded-md">
                            {loading ? '...' : stats.followers}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
