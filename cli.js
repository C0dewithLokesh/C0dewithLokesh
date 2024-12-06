#!/usr/bin/env node

console.clear();
console.log('\n\x1b[36m', 'Hi I am Lokesh 👋', '\x1b[0m\n');

const greenStr = (str) => `\x1b[32m${str}\x1b[32m`;

const info = {
  status: 'CS student',
  web: 'https://c0dewithlokesh-portfolio.vercel.app/',
  gh: 'https://github.com/c0dewithLokesh/',
  desc: 'A full stack dev getting hands dirty in open source',
  skills: {
    langs: ['.js', '.ts', '.py', '.sh'],
    skils: ['vim', 'git', 'docker', 'networking', 'oss', 'aws'],
  },
};

console.log(greenStr(JSON.stringify(info, null, 2)));
