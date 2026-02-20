const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

interface SpotifyTrack {
    name: string;
    artist: string;
    albumArt: string;
    trackUrl: string;
    trackId: string;
}

async function getAccessToken(): Promise<string> {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,
        }),
    });

    const data = await response.json();
    return data.access_token;
}

export async function getRecentlyPlayed(): Promise<SpotifyTrack | null> {
    try {
        const accessToken = await getAccessToken();

        // First try to get currently playing
        const currentRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });

        if (currentRes.status === 200) {
            const data = await currentRes.json();
            if (data?.item) {
                return {
                    name: data.item.name,
                    artist: data.item.artists.map((a: any) => a.name).join(', '),
                    albumArt: data.item.album.images[2]?.url || data.item.album.images[0]?.url || '',
                    trackUrl: data.item.external_urls.spotify,
                    trackId: data.item.id,
                };
            }
        }

        // Fallback: get recently played
        const recentRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });

        if (!recentRes.ok) return null;

        const recentData = await recentRes.json();
        const track = recentData.items?.[0]?.track;

        if (!track) return null;

        return {
            name: track.name,
            artist: track.artists.map((a: any) => a.name).join(', '),
            albumArt: track.album.images[2]?.url || track.album.images[0]?.url || '',
            trackUrl: track.external_urls.spotify,
            trackId: track.id,
        };
    } catch (error) {
        console.error('Spotify API error:', error);
        return null;
    }
}
