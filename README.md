# spotdl-wrapper
 Node.js Wrapper for SpotDL

# Installation
 **Haven't published this package to NPM.**

# How to use
```javascript
const spotdlWrapper = require('../spotdl-wrapper/dist/index.js');
(() => {
    spotdlWrapper.download('https://spotify.com/track/some_track', 'mp3', '4', "./Music", "{artist}/{album}/{title}.{ext}", "./ffmpeg.exe");
})();
```
