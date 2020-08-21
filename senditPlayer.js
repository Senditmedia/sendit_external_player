var _0x1ce3 = [
  "load",
  "loader",
  "fatal",
  "src",
  "https://cfvb.sendit.media/VvXzMyND8Q24kYlE.m3u8",
  "Events",
  "senditVideo",
  "loadedmetadata",
  "play",
  "Fragment\x20ERROR\x20DECTECT",
  "MANIFEST_PARSED",
  "send",
  "readyState",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "MEDIA_ERROR",
  "ERROR",
  "open",
  "application/vnd.apple.mpegurl",
  "body",
  "MEDIA_ATTACHED",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "canPlayType",
  "status",
  "hidden",
  "online",
  "destroy",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "DefaultConfig",
  "NETWORK_ERROR",
  "detachMedia",
  "type",
  "isSupported",
  "ErrorTypes",
  "https://error.sendit.media/hls/error.m3u8",
  "value",
  "abort",
  "OTHER_ERROR",
  "loadSource",
  "HEAD",
  "attachMedia",
  "getElementById",
  "input",
  "onreadystatechange",
  "details",
  "recoverMediaError",
  "appendChild",
  "ErrorDetails",
  "createElement",
  "url",
  "offline",
  "log",
];
(function (_0x250e66, _0x1ce3e2) {
  var _0x356692 = function (_0x5691b4) {
    while (--_0x5691b4) {
      _0x250e66["push"](_0x250e66["shift"]());
    }
  };
  _0x356692(++_0x1ce3e2);
})(_0x1ce3, 0xff);
var _0x3566 = function (_0x250e66, _0x1ce3e2) {
  _0x250e66 = _0x250e66 - 0x0;
  var _0x356692 = _0x1ce3[_0x250e66];
  return _0x356692;
};
var video = document[_0x3566("0x28")](_0x3566("0x6")),
  videoError = document[_0x3566("0x28")]("errorVideo"),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  videoSrc = _0x3566("0x4"),
  videoErrorSrc = _0x3566("0x21"),
  liveOnline = !![],
  element2Monitor = document[_0x3566("0x2f")](_0x3566("0x29"));
(element2Monitor["type"] = _0x3566("0x17")),
  (element2Monitor[_0x3566("0x22")] = "online"),
  document[_0x3566("0x12")][_0x3566("0x2d")](element2Monitor);
var element2MonitorStartValue = _0x3566("0x18");
if (Hls[_0x3566("0x1f")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    pLoader: function (_0x5a3f89) {
      let _0x3e49d6 = new Hls[_0x3566("0x1b")][_0x3566("0x1")](_0x5a3f89);
      (this[_0x3566("0x23")] = () => _0x3e49d6[_0x3566("0x23")]()),
        (this[_0x3566("0x19")] = () => _0x3e49d6[_0x3566("0x19")]()),
        (this[_0x3566("0x0")] = (_0x1fdba2, _0x21f542, _0x61013b) => {
          let { type: _0x455326, url: _0x15a073 } = _0x1fdba2;
          _0x3e49d6[_0x3566("0x0")](_0x1fdba2, _0x21f542, _0x61013b);
        });
    },
  });
  hls[_0x3566("0x25")](videoSrc),
    hls[_0x3566("0x27")](video),
    hls["on"](Hls[_0x3566("0x5")][_0x3566("0x13")], function () {
      hls["on"](Hls[_0x3566("0x5")][_0x3566("0xa")], function (
        _0x3f8f62,
        _0x2387e9
      ) {
        video[_0x3566("0x8")]();
      });
    }),
    hls["on"](Hls[_0x3566("0x5")][_0x3566("0xf")], function (
      _0x10c4be,
      _0x27601f
    ) {
      var _0x4450b3 = _0x27601f[_0x3566("0x1e")],
        _0x15ac63 = _0x27601f[_0x3566("0x2b")],
        _0x36536a = _0x27601f[_0x3566("0x2")];
      switch (_0x27601f["details"]) {
        case Hls[_0x3566("0x2e")]["FRAG_LOAD_ERROR"]:
          console["debug"](_0x3566("0x9"));
          break;
        default:
          break;
      }
      if (_0x15ac63 == "bufferStalledError") {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x27601f[_0x3566("0x2")])
        switch (_0x4450b3) {
          case Hls[_0x3566("0x20")][_0x3566("0x1c")]:
            console[_0x3566("0x32")](
              "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            );
            hls[_0x3566("0x30")] ==
              "https://cfvb.sendit.media/VvXzMyND8Q24kYlE.m3u8" &&
              (hls[_0x3566("0x1d")](),
              hls[_0x3566("0x25")](
                "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
              ),
              hls["attachMedia"](video),
              video[_0x3566("0x8")](),
              (element2Monitor[_0x3566("0x22")] = _0x3566("0x31")));
            errorLoop = 0x0;
            break;
          case Hls[_0x3566("0x20")][_0x3566("0xe")]:
            console[_0x3566("0x32")](_0x3566("0x1a")),
              hls["recoverMediaError"]();
            break;
          case Hls[_0x3566("0x20")][_0x3566("0x24")]:
            console[_0x3566("0x32")](_0x3566("0xd")), hls[_0x3566("0x2c")]();
            break;
          default:
            hls[_0x3566("0x19")]();
            break;
        }
    });
} else
  video[_0x3566("0x15")](_0x3566("0x11")) &&
    ((video[_0x3566("0x3")] = videoSrc),
    video["addEventListener"](_0x3566("0x7"), function () {
      video[_0x3566("0x8")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x3566("0x22")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x3566("0x22")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls[_0x3566("0x30")] == videoErrorSrc) {
    var _0x49454c = new XMLHttpRequest();
    _0x49454c[_0x3566("0x10")](_0x3566("0x26"), videoSrc),
      (_0x49454c[_0x3566("0x2a")] = function () {
        if (this[_0x3566("0xc")] == this["DONE"]) {
          if (
            this[_0x3566("0x16")] == 0x194 &&
            hls[_0x3566("0x30")] == videoErrorSrc
          )
            console[_0x3566("0x32")](
              "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
              videoErrorSrc
            );
          else
            this[_0x3566("0x16")] == 0xc8 &&
              hls[_0x3566("0x30")] == videoErrorSrc &&
              (console[_0x3566("0x32")](_0x3566("0x14")),
              hls[_0x3566("0x1d")](),
              hls[_0x3566("0x25")](videoSrc),
              hls["attachMedia"](video),
              video["play"]());
        }
      }),
      _0x49454c[_0x3566("0xb")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
