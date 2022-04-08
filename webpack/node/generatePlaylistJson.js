const fs = require('fs');
const util = require('util');
const { google } = require('googleapis');
const path = require('path');
const { googleAuthKey } = require('./env.js');

async function generatePlaylistJson() {

    const youtube = google.youtube({
        version: 'v3',
        auth: googleAuthKey,
    });

    const playlistResp = await youtube.playlists.list({
        part: 'id,snippet',
        channelId: 'UCPJXhXRkeSXngqwHo2PkncQ',
        maxResults: 4,
    });

    const mappedPlayLists = [];
    for (let plIndex = 0; plIndex < playlistResp.data.items.length; plIndex++) {
        const playList = playlistResp.data.items[plIndex];
        // console.log(playList.snippet);
        const thumbnail = playList.snippet.thumbnails.standard ??
            playList.snippet.thumbnails.high ??
            playList.snippet.thumbnails.maxres;
        mappedPlayLists.push({
            link: `https://www.youtube.com/playlist?list=${playList.id}`,
            imgUrl: thumbnail?.url,
            title: playList.snippet?.localized?.title ?? '',
            descrip: (playList.snippet?.localized?.description ?? '').substring(0, 100).trim() + '...',
        });
    }

    let fullJson = {
        playlistCards: mappedPlayLists,
    };

    fs.writeFile('./webpack/data/playlist.json', JSON.stringify(fullJson), ['utf8'], () => { });
}


generatePlaylistJson();