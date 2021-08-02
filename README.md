# yt-live-url
>  A node module to get stream url (.m3u8) from live streaming YouTube Channels

## Installation
[Node.js](https://nodejs.org/en/) required
```bash
npm install yt-live-url
```

## Usage

Require YouTube channel-id.

Example: 

```https://www.youtube.com/channel/UCP0uG-mcMImgKnJz-VjJZmQ```

```UCP0uG-mcMImgKnJz-VjJZmQ``` is the channel-id string from the above url

```js
const yt = require('yt-live-url');

// returns .m3u8 link for the live stream 
yt.getStream("UCNVkxRPqsBNejO6B9thG9Xw")
    .then(data => console.log(data))
```
Example output:
```js
[
    'https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1627911545/ei/GaEHYYSlLIWK4t4PiJuQqAs/ip/<ip address>/id/_WK30gnY3_4.13/source/yt_live_broadcast/r
    equiressl/yes/tx/24027681/txs/24027679%2C24027680%2C24027681%2C24027682/hfr/1/playlist_duration/30/manifest_duration/30/maudio/1/vprv/1/go/1/nvgoi/1/keepalive/yes/fexp/2
    4001373%2C24007246/beids/9466587/dover/11/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Ctx%2Ctxs%2Chfr%2Cplaylist_duration%2Cmanifest_du
    ration%2Cmaudio%2Cvprv%2Cgo%2Citag%2Cplaylist_type/sig/AOq0QJ8wRQIhAJ5jTt77Xy3072tYRc2ZMPPVoE9ucUYGij1hZ2JEphd0AiARnnQfqo6ejwKZvgpe0yRxupODNwj7QsSfwkb4QyPkfA%3D%3D/file/
    index.m3u8'
]
```

## Contribute
Did you find a bug? Do you have an idea or a feature request? [Open an issue!](https://github.com/arapurayil/yt-live-url/issues)

## License
[ISC](https://github.com/arapurayil/yt-live-url/blob/master/LICENSE)
