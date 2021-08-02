const {request} = require('undici');

async function getStream(id) {
    let url = 'https://www.youtube.com/channel/' + id + '/live';
    const {body} = await request(url);
    let bodyText = await body.text();
    let stream = bodyText.match(/(?<=hlsManifestUrl":").*\.m3u8/g);
    if (stream) return stream;
    else return 'Check channel id';
}

exports.getStream = getStream;
