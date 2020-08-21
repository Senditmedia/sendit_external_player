var _0x1c19 = [
  "play",
  "ERROR",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "MANIFEST_PARSED",
  "HEAD",
  "attachMedia",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "search",
  "online",
  "MEDIA_ERROR",
  "ErrorDetails",
  "loader",
  "open",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "application/vnd.apple.mpegurl",
  "detachMedia",
  "canPlayType",
  ".m3u8",
  "url",
  "onreadystatechange",
  "body",
  "fatal",
  "status",
  "loop",
  "debug",
  "key",
  "recoverMediaError",
  "location",
  "value",
  "DONE",
  "https://error.sendit.media/hls/error.m3u8",
  "addEventListener",
  "https://cfv.sendit.media/",
  "hidden",
  "loadSource",
  "getElementById",
  "send",
  "details",
  "DefaultConfig",
  "bufferStalledError",
  "createElement",
  "type",
  "loadedmetadata",
  "offline",
  "Events",
  "isSupported",
  "log",
  "load",
  "FRAG_LOAD_ERROR",
  "readyState",
  "destroy",
];
(function (_0x544941, _0x1c199c) {
  var _0x2b8f30 = function (_0x2723e3) {
    while (--_0x2723e3) {
      _0x544941["push"](_0x544941["shift"]());
    }
  };
  _0x2b8f30(++_0x1c199c);
})(_0x1c19, 0x1c6);
var _0x2b8f = function (_0x544941, _0x1c199c) {
  _0x544941 = _0x544941 - 0x0;
  var _0x2b8f30 = _0x1c19[_0x544941];
  return _0x2b8f30;
};
var video = document[_0x2b8f("0x28")]("senditVideo"),
  videoError = document[_0x2b8f("0x28")]("errorVideo"),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x2b8f("0x20")][_0x2b8f("0xc")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams["get"](_0x2b8f("0x1e"));
var videoSrc = _0x2b8f("0x25") + key + _0x2b8f("0x16"),
  videoErrorSrc = _0x2b8f("0x23"),
  liveOnline = !![],
  element2Monitor = document[_0x2b8f("0x2d")]("input");
(element2Monitor[_0x2b8f("0x2e")] = _0x2b8f("0x26")),
  (element2Monitor[_0x2b8f("0x21")] = "online"),
  document[_0x2b8f("0x19")]["appendChild"](element2Monitor);
var element2MonitorStartValue = _0x2b8f("0xd");
if (Hls[_0x2b8f("0x32")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x32ecbb) {
      let _0x2979e2 = new Hls[_0x2b8f("0x2b")][_0x2b8f("0x10")](_0x32ecbb);
      (this["abort"] = () => _0x2979e2["abort"]()),
        (this[_0x2b8f("0x4")] = () => _0x2979e2[_0x2b8f("0x4")]()),
        (this["load"] = (_0xf9b78e, _0x3da04a, _0x33bb41) => {
          let { type: _0x507471, url: _0x3eb1db } = _0xf9b78e;
          _0x2979e2[_0x2b8f("0x1")](_0xf9b78e, _0x3da04a, _0x33bb41);
        });
    },
  });
  hls[_0x2b8f("0x27")](videoSrc),
    hls["attachMedia"](video),
    hls["on"](Hls[_0x2b8f("0x31")]["MEDIA_ATTACHED"], function () {
      hls["on"](Hls["Events"][_0x2b8f("0x8")], function (_0x53ee20, _0x142f55) {
        video[_0x2b8f("0x5")]();
      });
    }),
    hls["on"](Hls[_0x2b8f("0x31")][_0x2b8f("0x6")], function (
      _0x32e439,
      _0x4701da
    ) {
      var _0x4608bf = _0x4701da["type"],
        _0x4898ae = _0x4701da[_0x2b8f("0x2a")],
        _0x53f78d = _0x4701da[_0x2b8f("0x1a")];
      switch (_0x4701da[_0x2b8f("0x2a")]) {
        case Hls[_0x2b8f("0xf")][_0x2b8f("0x2")]:
          console[_0x2b8f("0x1d")]("Fragment\x20ERROR\x20DECTECT");
          break;
        default:
          break;
      }
      if (_0x4898ae == _0x2b8f("0x2c")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x4701da[_0x2b8f("0x1a")])
        switch (_0x4608bf) {
          case Hls["ErrorTypes"]["NETWORK_ERROR"]:
            console["log"](
              "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            );
            hls[_0x2b8f("0x17")] == videoSrc &&
              (hls[_0x2b8f("0x14")](),
              hls[_0x2b8f("0x27")](videoErrorSrc),
              hls[_0x2b8f("0xa")](video),
              video["play"](),
              (video[_0x2b8f("0x1c")] = !![]),
              (element2Monitor[_0x2b8f("0x21")] = _0x2b8f("0x30")));
            errorLoop = 0x0;
            break;
          case Hls["ErrorTypes"][_0x2b8f("0xe")]:
            console["log"](_0x2b8f("0x7")), hls[_0x2b8f("0x1f")]();
            break;
          case Hls["ErrorTypes"]["OTHER_ERROR"]:
            console[_0x2b8f("0x0")](
              "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            ),
              hls[_0x2b8f("0x1f")]();
            break;
          default:
            hls["destroy"]();
            break;
        }
    });
} else
  video[_0x2b8f("0x15")](_0x2b8f("0x13")) &&
    ((video["src"] = videoSrc),
    video[_0x2b8f("0x24")](_0x2b8f("0x2f"), function () {
      video[_0x2b8f("0x5")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x2b8f("0x21")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x2b8f("0x21")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls[_0x2b8f("0x17")] == videoErrorSrc) {
    var _0x3a1a1c = new XMLHttpRequest();
    _0x3a1a1c[_0x2b8f("0x11")](_0x2b8f("0x9"), videoSrc),
      (_0x3a1a1c[_0x2b8f("0x18")] = function () {
        if (this[_0x2b8f("0x3")] == this[_0x2b8f("0x22")]) {
          if (
            this[_0x2b8f("0x1b")] == 0x194 &&
            hls[_0x2b8f("0x17")] == videoErrorSrc
          )
            console[_0x2b8f("0x0")](_0x2b8f("0xb"), videoSrc);
          else
            this[_0x2b8f("0x1b")] == 0xc8 &&
              hls[_0x2b8f("0x17")] == videoErrorSrc &&
              (console[_0x2b8f("0x0")](_0x2b8f("0x12")),
              hls[_0x2b8f("0x14")](),
              hls[_0x2b8f("0x27")](videoSrc),
              hls[_0x2b8f("0xa")](video),
              video[_0x2b8f("0x5")](),
              (video[_0x2b8f("0x1c")] = ![]));
        }
      }),
      _0x3a1a1c[_0x2b8f("0x29")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
