/**
 * One-time helper script to get your Spotify Refresh Token.
 * Writes the token to .env file directly.
 */

import http from 'http';
import { exec } from 'child_process';
import { writeFileSync } from 'fs';

const CLIENT_ID = '0b47d86532674df0984108ac7ebc98f2';
const CLIENT_SECRET = '9448d50268a8413d9ba3dbdb29140454';
const REDIRECT_URI = 'http://127.0.0.1:3001/callback';
const SCOPES = 'user-read-recently-played user-read-currently-playing';

const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;

const server = http.createServer(async (req, res) => {
    if (!req.url?.startsWith('/callback')) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }

    const url = new URL(req.url, `http://127.0.0.1:3001`);
    const code = url.searchParams.get('code');
    const error = url.searchParams.get('error');

    if (error || !code) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end(`<h1>Error</h1>`);
        server.close();
        return;
    }

    try {
        const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: REDIRECT_URI,
            }),
        });

        const data = await tokenRes.json();

        if (data.refresh_token) {
            // Write token directly to a file
            writeFileSync('spotify-refresh-token.txt', data.refresh_token, 'utf-8');

            // Also write .env file
            writeFileSync('.env', [
                `VITE_SPOTIFY_CLIENT_ID=${CLIENT_ID}`,
                `VITE_SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`,
                `VITE_SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`,
            ].join('\n'), 'utf-8');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<html><body style="background:#111;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;"><div style="text-align:center;"><h1 style="color:#1ed760;">✅ Success!</h1><p>Refresh Token saved to .env file!</p></div></body></html>`);
        } else {
            writeFileSync('spotify-refresh-token.txt', 'ERROR: ' + JSON.stringify(data), 'utf-8');
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end(`<h1>Error</h1><pre>${JSON.stringify(data, null, 2)}</pre>`);
        }
    } catch (err) {
        res.writeHead(500);
        res.end('Server error');
    }

    setTimeout(() => server.close(), 1000);
});

server.listen(3001, '127.0.0.1', () => {
    console.log('Opening Spotify auth page...');
    exec(`start "" "${authUrl}"`);
});
