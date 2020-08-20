var _0x1a99 = [
  "application/vnd.apple.mpegurl",
  "errorVideo",
  "attachMedia",
  "src",
  "MEDIA_ERROR",
  "style",
  "Events",
  "MANIFEST_PARSED",
  "manifest",
  "display",
  "ErrorTypes",
  "bufferStalledError",
  "video",
  "MEDIA_ATTACHED",
  "loadSource",
  "NETWORK_ERROR",
  "type",
  "loadedmetadata",
  "display:\x20none;\x20width:\x20500px;",
  "recoverMediaError",
  "isSupported",
  "loop",
  "getElementById",
  "load",
  "abort",
  "addEventListener",
  "https://cfvb.sendit.media/VvXzMyND8Q24kYlE.m3u8",
  "muted",
  "play",
  "startLoad",
  "destroy",
  "DefaultConfig",
  "block",
  "ERROR",
  "none",
  "detachMedia",
  "details",
  "fatal",
];
(function (_0x47c1a3, _0x1a9908) {
  var _0x555353 = function (_0x2760a1) {
    while (--_0x2760a1) {
      _0x47c1a3["push"](_0x47c1a3["shift"]());
    }
  };
  _0x555353(++_0x1a9908);
})(_0x1a99, 0x191);
var _0x5553 = function (_0x47c1a3, _0x1a9908) {
  _0x47c1a3 = _0x47c1a3 - 0x0;
  var _0x555353 = _0x1a99[_0x47c1a3];
  return _0x555353;
};
var video = document[_0x5553("0x1")](_0x5553("0x1d")),
  videoError = document[_0x5553("0x1")](_0x5553("0x12")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  videoSrc = _0x5553("0x5");
(videoError[_0x5553("0x14")] =
  "https://danx7jpj2s3ma.cloudfront.net/SenditErrorVideo.mp4"),
  (videoError[_0x5553("0x21")] = "video/mp4"),
  (videoError["preload"] = _0x5553("0xd")),
  (videoError[_0x5553("0x16")] = _0x5553("0x23")),
  (videoError[_0x5553("0x6")] = !![]),
  (videoError[_0x5553("0x0")] = !![]);
if (Hls[_0x5553("0x25")]()) {
  var hls = new Hls({
    debug: ![],
    liveSyncDurationCount: 0x4,
    startLevel: 0x1,
    initialLiveManifestSize: 0x3,
    pLoader: function (_0x32a513) {
      let _0x3af334 = new Hls[_0x5553("0xa")]["loader"](_0x32a513);
      (this[_0x5553("0x3")] = () => _0x3af334[_0x5553("0x3")]()),
        (this[_0x5553("0x9")] = () => _0x3af334[_0x5553("0x9")]()),
        (this["load"] = (_0x40c0b2, _0x3cb3d1, _0x2d0975) => {
          let { type: _0x958ea4, url: _0x163b83 } = _0x40c0b2;
          if (_0x958ea4 === _0x5553("0x19")) {
          }
          _0x3af334[_0x5553("0x2")](_0x40c0b2, _0x3cb3d1, _0x2d0975);
        });
    },
  });
  hls[_0x5553("0x1f")](videoSrc),
    hls[_0x5553("0x13")](video),
    hls["on"](Hls[_0x5553("0x17")][_0x5553("0x1e")], function () {
      hls["on"](Hls[_0x5553("0x17")][_0x5553("0x18")], function (
        _0x3fa66e,
        _0x1bbdcb
      ) {
        video["play"]();
      });
    }),
    hls["on"](Hls[_0x5553("0x17")][_0x5553("0xc")], function (
      _0x225ea7,
      _0x4b4519
    ) {
      _0x4b4519[_0x5553("0xf")] == _0x5553("0x1c") &&
        (errorLoop > 0x0
          ? (hls[_0x5553("0xe")](),
            hls[_0x5553("0x13")](video),
            (errorLoop = 0x0),
            (videoError[_0x5553("0x16")][_0x5553("0x1a")] = _0x5553("0xd")),
            (video[_0x5553("0x16")][_0x5553("0x1a")] = "block"),
            (video[_0x5553("0x6")] = ![]))
          : errorLoop++);
      if (_0x4b4519[_0x5553("0x10")])
        switch (_0x4b4519[_0x5553("0x21")]) {
          case Hls[_0x5553("0x1b")][_0x5553("0x20")]:
            hls[_0x5553("0x8")]((startPosition = 0x1)),
              (videoError[_0x5553("0x16")]["display"] = _0x5553("0xb")),
              (video[_0x5553("0x16")]["display"] = _0x5553("0xd")),
              (video[_0x5553("0x6")] = !![]),
              videoError[_0x5553("0x7")](),
              (errorLoop = 0x0);
            break;
          case Hls[_0x5553("0x1b")][_0x5553("0x15")]:
            hls[_0x5553("0x24")]();
            break;
          case Hls[_0x5553("0x1b")]["OTHER_ERROR"]:
            hls[_0x5553("0x24")]();
            break;
          default:
            hls[_0x5553("0x9")]();
            break;
        }
    });
} else
  video["canPlayType"](_0x5553("0x11")) &&
    ((video[_0x5553("0x14")] = videoSrc),
    video[_0x5553("0x4")](_0x5553("0x22"), function () {
      video["play"]();
    }));
