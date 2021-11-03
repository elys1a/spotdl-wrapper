const d = require('../dist/src/index');

(async () => {
    await d.download('https://open.spotify.com/track/1vbWvIDfJYYyLVke6I3Vwk', d.formats.MP3, 4, "C:/Music", "{artist}/{album}/{title}.{ext}");
})();