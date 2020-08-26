var _0x4874 = [
  "ERROR",
  "recoverMediaError",
  "muted",
  "bufferStalledError",
  "ErrorDetails",
  "reloadOnError()",
  "value",
  "readyState",
  "src",
  "destroy",
  "DONE",
  "hidden",
  "loadSource",
  "offline",
  "status",
  "get",
  "search",
  "canPlayType",
  "attachMedia",
  "senditVideo",
  "play",
  "detachMedia",
  "application/vnd.apple.mpegurl",
  "MANIFEST_PARSED",
  "log",
  "load",
  "onerror",
  "debug",
  "MEDIA_ATTACHED",
  "MEDIA_ERROR",
  "fatal",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "appendChild",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "HEAD",
  "ErrorTypes",
  "OTHER_ERROR",
  "loop",
  "abort",
  "onreadystatechange",
  "setAttribute",
  "DefaultConfig",
  "FRAG_LOAD_ERROR",
  "type",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "errorVideo",
  "send",
  "details",
  "body",
  "Events",
  "loader",
  "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT",
  "https://error.sendit.media/hls/error.m3u8",
  "url",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "open",
  "input",
  "online",
  "key",
];
(function (_0xc6f117, _0x487423) {
  var _0x1617b3 = function (_0x4d9b0f) {
    while (--_0x4d9b0f) {
      _0xc6f117["push"](_0xc6f117["shift"]());
    }
  };
  _0x1617b3(++_0x487423);
})(_0x4874, 0x98);
var _0x1617 = function (_0xc6f117, _0x487423) {
  _0xc6f117 = _0xc6f117 - 0x0;
  var _0x1617b3 = _0x4874[_0xc6f117];
  return _0x1617b3;
};
var video = document["getElementById"](_0x1617("0x2c")),
  videoError = document["getElementById"](_0x1617("0xb")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  somethingChanged = ![];
const queryString = window["location"][_0x1617("0x29")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x1617("0x28")](_0x1617("0x18"));
var videoSrc = "https://cfv.sendit.media/" + key + ".m3u8",
  videoErrorSrc = _0x1617("0x12"),
  liveOnline = !![],
  errorCount = 0x0,
  stalledCount = 0x0,
  element2Monitor = document["createElement"](_0x1617("0x16"));
(element2Monitor[_0x1617("0x9")] = _0x1617("0x24")),
  (element2Monitor[_0x1617("0x1f")] = _0x1617("0x17")),
  document[_0x1617("0xe")][_0x1617("0x39")](element2Monitor);
var element2MonitorStartValue = _0x1617("0x17"),
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls["isSupported"]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x4ee99d) {
      let _0x4b887c = new Hls[_0x1617("0x7")][_0x1617("0x10")](_0x4ee99d);
      (this[_0x1617("0x4")] = () => _0x4b887c[_0x1617("0x4")]()),
        (this["destroy"] = () => _0x4b887c[_0x1617("0x22")]()),
        (this[_0x1617("0x32")] = (_0x4408e9, _0x25d475, _0x44a8f1) => {
          let { type: _0x322f28, url: _0x4e158b } = _0x4408e9;
          _0x4b887c[_0x1617("0x32")](_0x4408e9, _0x25d475, _0x44a8f1);
        });
    },
  });
  hls["loadSource"](videoSrc),
    hls["attachMedia"](video),
    hls["on"](Hls[_0x1617("0xf")][_0x1617("0x35")], function () {
      hls["on"](Hls["Events"][_0x1617("0x30")], function (
        _0x2ae82e,
        _0x4d58e2
      ) {
        video["play"]();
      });
    }),
    hls["on"](Hls["Events"][_0x1617("0x19")], function (_0x3c85ea, _0x4dee4d) {
      var _0x197ab8 = _0x4dee4d[_0x1617("0x9")],
        _0x305fc0 = _0x4dee4d[_0x1617("0xd")],
        _0xac90cb = _0x4dee4d[_0x1617("0x37")];
      switch (_0x4dee4d[_0x1617("0xd")]) {
        case Hls[_0x1617("0x1d")][_0x1617("0x8")]:
          console[_0x1617("0x34")](_0x1617("0x11"));
          break;
        default:
          break;
      }
      if (_0x305fc0 == _0x1617("0x1c")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x4dee4d[_0x1617("0x37")])
        switch (_0x197ab8) {
          case Hls[_0x1617("0x1")]["NETWORK_ERROR"]:
            console[_0x1617("0x31")](
              "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            );
            hls[_0x1617("0x13")] == videoSrc &&
              (hls[_0x1617("0x2e")](),
              hls[_0x1617("0x25")](videoErrorSrc),
              hls[_0x1617("0x2b")](video),
              video[_0x1617("0x2d")](),
              (video["loop"] = !![]),
              (element2Monitor[_0x1617("0x1f")] = _0x1617("0x26")));
            errorLoop = 0x0;
            break;
          case Hls[_0x1617("0x1")][_0x1617("0x36")]:
            console[_0x1617("0x31")](_0x1617("0x3a")), hls[_0x1617("0x1a")]();
            break;
          case Hls[_0x1617("0x1")][_0x1617("0x2")]:
            console[_0x1617("0x31")](_0x1617("0xa")), hls[_0x1617("0x1a")]();
            break;
          default:
            hls["destroy"]();
            break;
        }
    });
  function track_change() {
    element2Monitor[_0x1617("0x1f")] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x1617("0x1f")]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else {
  if (video[_0x1617("0x2a")](_0x1617("0x2f"))) {
    (hlsOrHtmlPlayer = ![]),
      (video[_0x1617("0x21")] = videoSrc),
      video[_0x1617("0x6")](_0x1617("0x33"), _0x1617("0x1e"));
    function reloadOnError() {
      errorCount == 0x0 &&
        ((video[_0x1617("0x21")] = videoErrorSrc),
        (video[_0x1617("0x1b")] = !![]),
        (video[_0x1617("0x3")] = !![]),
        video[_0x1617("0x32")](),
        video[_0x1617("0x2d")](),
        errorCount == 0x1);
    }
  }
}
function onlineMonitor() {
  if (hls[_0x1617("0x13")] == videoErrorSrc) {
    var _0xb3dd86 = new XMLHttpRequest();
    _0xb3dd86[_0x1617("0x15")](_0x1617("0x0"), videoSrc),
      (_0xb3dd86[_0x1617("0x5")] = function () {
        if (this[_0x1617("0x20")] == this[_0x1617("0x23")]) {
          if (
            this[_0x1617("0x27")] == 0x194 &&
            hls[_0x1617("0x13")] == videoErrorSrc
          )
            console[_0x1617("0x31")](_0x1617("0x14"), videoSrc);
          else
            this[_0x1617("0x27")] == 0xc8 &&
              hls[_0x1617("0x13")] == videoErrorSrc &&
              (console[_0x1617("0x31")](_0x1617("0x38")),
              (element2Monitor["value"] = _0x1617("0x17")),
              (somethingChanged = ![]),
              (video[_0x1617("0x3")] = ![]),
              hls[_0x1617("0x2e")](),
              hls[_0x1617("0x25")](videoSrc),
              hls["attachMedia"](video),
              video[_0x1617("0x2d")]());
        }
      }),
      _0xb3dd86[_0x1617("0xc")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitorHLSNative();
function onlineMonitorHLSNative() {
  var _0x21e18e = new XMLHttpRequest();
  _0x21e18e["open"](_0x1617("0x0"), videoSrc),
    (_0x21e18e[_0x1617("0x5")] = function () {
      if (this[_0x1617("0x20")] == this["DONE"]) {
        if (
          this[_0x1617("0x27")] == 0x194 &&
          video[_0x1617("0x21")] == videoSrc
        )
          console[_0x1617("0x31")](_0x1617("0x14"), videoSrc),
            (video[_0x1617("0x3")] = !![]),
            (video[_0x1617("0x21")] = videoErrorSrc),
            video[_0x1617("0x32")](),
            video[_0x1617("0x2d")]();
        else
          this[_0x1617("0x27")] == 0xc8 &&
            video[_0x1617("0x21")] == videoErrorSrc &&
            (console[_0x1617("0x31")](_0x1617("0x38")),
            (video[_0x1617("0x3")] = ![]),
            (video[_0x1617("0x21")] = videoSrc),
            video[_0x1617("0x32")](),
            video[_0x1617("0x2d")]());
      }
    }),
    _0x21e18e[_0x1617("0xc")](),
    setTimeout(onlineMonitorHLSNative, 0x1f40);
}
