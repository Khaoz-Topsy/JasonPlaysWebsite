const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function generateFullJson() {
    let fullJson = {};

    const siteDataContentsPromise = readFile('./webpack/data/site.json', 'utf8');
    const playlistContentsPromise = readFile('./webpack/data/playlist.json', 'utf8');

    const siteDataContents = await siteDataContentsPromise;
    const playlistContents = await playlistContentsPromise;

    const siteData = JSON.parse(siteDataContents);
    const playlist = JSON.parse(playlistContents);

    fullJson = { ...siteData, ...playlist };

    fs.writeFile('./webpack/data/project.json', JSON.stringify(fullJson), ['utf8'], () => { });
}


generateFullJson();
