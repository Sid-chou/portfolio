const fs = require('fs');
const content = fs.readFileSync('node_modules/tech-stack-icons/dist/index.js', 'utf8');

const regex = /"([a-zA-Z0-9_\-]+)":\s*\{\s*keywords/g;
const keys = [];
let match;
while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
}

const reqs = ['next', 'type', 'tail', 'prisma', 'node', 'appwrite', 'docker', 'react', 'socket', 'redux', 'vue', 'nuxt', 'sass'];

console.log(keys.filter(k => reqs.some(r => k.toLowerCase().includes(r))));
