var _0x8586 = [
  "quality",
  "none",
  "getElementById",
  "application/vnd.apple.mpegurl",
  "MEDIA_ERROR",
  "send",
  "loader",
  "MANIFEST_PARSED",
  "ERROR",
  "debug",
  "/playlist.m3u8",
  "NETWORK_ERROR",
  "loadSource",
  "style",
  "details",
  "Events",
  "https://cfv.sendit.media/",
  "https://error.sendit.media/hls/error.m3u8",
  "MEDIA_ATTACHED",
  "play",
  "DONE",
  "HEAD",
  "location",
  "url",
  "value",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "src",
  "load",
  "onerror",
  "display",
  "hidden",
  "bufferStalledError",
  "detachMedia",
  "attachMedia",
  "online",
  "muted",
  "search",
  "key",
  "destroy",
  "ErrorTypes",
  "status",
  "canPlayType",
  "fatal",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "body",
  "appendChild",
  "isSupported",
  "recoverMediaError",
  "type",
  "readyState",
  "errorVideo",
  "setAttribute",
  "get",
  "FRAG_LOAD_ERROR",
  "loop",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "undefined",
  "input",
  "ErrorDetails",
  "abort",
  "open",
  "reloadOnError()",
  ".m3u8",
  "log",
  "onreadystatechange",
  "vod",
];
(function (_0x5d180f, _0x85863) {
  var _0x4a7a29 = function (_0x10d51f) {
    while (--_0x10d51f) {
      _0x5d180f["push"](_0x5d180f["shift"]());
    }
  };
  _0x4a7a29(++_0x85863);
})(_0x8586, 0x1eb);
var _0x4a7a = function (_0x5d180f, _0x85863) {
  _0x5d180f = _0x5d180f - 0x0;
  var _0x4a7a29 = _0x8586[_0x5d180f];
  return _0x4a7a29;
};
var videoError = document[_0x4a7a("0x27")](_0x4a7a("0x15")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  somethingChanged = ![];
const queryString = window[_0x4a7a("0x3b")][_0x4a7a("0x7")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x4a7a("0x17")](_0x4a7a("0x8")),
  vod = urlParams[_0x4a7a("0x17")](_0x4a7a("0x24"));
if (vod == "" || vod == null)
  var videoSrc = _0x4a7a("0x35") + key + _0x4a7a("0x21"),
    videoErrorSrc = _0x4a7a("0x36");
else
  var videoSrc = "https://external.sendit.media/vod/" + key + _0x4a7a("0x2f"),
    videoErrorSrc = _0x4a7a("0x36");
var liveOnline = !![],
  errorCount = 0x0,
  stalledCount = 0x0,
  element2Monitor = document["createElement"](_0x4a7a("0x1c"));
(element2Monitor[_0x4a7a("0x13")] = _0x4a7a("0x1")),
  (element2Monitor[_0x4a7a("0x3d")] = _0x4a7a("0x5")),
  document[_0x4a7a("0xf")][_0x4a7a("0x10")](element2Monitor);
var element2MonitorStartValue = _0x4a7a("0x5"),
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls[_0x4a7a("0x11")]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: 0x3,
    autoLevelEnabled: !![],
    pLoader: function (_0x10d51f) {
      let _0x5f3c74 = new Hls["DefaultConfig"][_0x4a7a("0x2b")](_0x10d51f);
      (this[_0x4a7a("0x1e")] = () => _0x5f3c74["abort"]()),
        (this["destroy"] = () => _0x5f3c74[_0x4a7a("0x9")]()),
        (this[_0x4a7a("0x40")] = (_0x9f1aa4, _0x5d57d7, _0x2d7d45) => {
          let { type: _0x5d64d2, url: _0x4e4192 } = _0x9f1aa4;
          _0x5f3c74["load"](_0x9f1aa4, _0x5d57d7, _0x2d7d45);
        });
    },
  });
  hls["loadSource"](videoSrc),
    hls[_0x4a7a("0x4")](video),
    hls["on"](Hls[_0x4a7a("0x34")][_0x4a7a("0x37")], function () {
      hls["on"](Hls[_0x4a7a("0x34")][_0x4a7a("0x2c")], function (
        _0x2edcd4,
        _0x1613d8
      ) {
        video[_0x4a7a("0x38")]();
      });
    }),
    hls["on"](Hls[_0x4a7a("0x34")][_0x4a7a("0x2d")], function (
      _0x2d1336,
      _0x4b04d1
    ) {
      var _0x5b9ed0 = _0x4b04d1[_0x4a7a("0x13")],
        _0x254e9c = _0x4b04d1["details"],
        _0x5548af = _0x4b04d1[_0x4a7a("0xd")];
      switch (_0x4b04d1[_0x4a7a("0x33")]) {
        case Hls[_0x4a7a("0x1d")][_0x4a7a("0x18")]:
          console[_0x4a7a("0x2e")](
            "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT"
          );
          break;
        default:
          break;
      }
      if (_0x254e9c == _0x4a7a("0x2")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x4b04d1[_0x4a7a("0xd")])
        switch (_0x5b9ed0) {
          case Hls[_0x4a7a("0xa")][_0x4a7a("0x30")]:
            console[_0x4a7a("0x22")](
              "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            );
            hls["url"] == videoSrc &&
              (hls[_0x4a7a("0x3")](),
              hls[_0x4a7a("0x31")](videoErrorSrc),
              hls["attachMedia"](video),
              video[_0x4a7a("0x38")](),
              (video[_0x4a7a("0x19")] = !![]),
              (element2Monitor[_0x4a7a("0x3d")] = "offline"));
            errorLoop = 0x0;
            break;
          case Hls["ErrorTypes"][_0x4a7a("0x29")]:
            console["log"](
              "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            ),
              hls[_0x4a7a("0x12")]();
            break;
          case Hls[_0x4a7a("0xa")]["OTHER_ERROR"]:
            console[_0x4a7a("0x22")](_0x4a7a("0xe")), hls[_0x4a7a("0x12")]();
            break;
          default:
            hls["destroy"]();
            break;
        }
    });
  function track_change() {
    element2Monitor[_0x4a7a("0x3d")] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x4a7a("0x3d")]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else {
  if (video[_0x4a7a("0xc")](_0x4a7a("0x28"))) {
    (hlsOrHtmlPlayer = ![]),
      (video["src"] = videoSrc),
      video[_0x4a7a("0x16")](_0x4a7a("0x41"), _0x4a7a("0x20"));
    function reloadOnError() {
      errorCount == 0x0 &&
        ((video[_0x4a7a("0x3f")] = videoErrorSrc),
        (video[_0x4a7a("0x6")] = !![]),
        (video["loop"] = !![]),
        video[_0x4a7a("0x40")](),
        video[_0x4a7a("0x38")](),
        errorCount == 0x1);
    }
  }
}
function onlineMonitor() {
  if (hls["url"] == videoErrorSrc) {
    var _0x41c17c = new XMLHttpRequest();
    _0x41c17c["open"](_0x4a7a("0x3a"), videoSrc),
      (_0x41c17c[_0x4a7a("0x23")] = function () {
        if (this[_0x4a7a("0x14")] == this[_0x4a7a("0x39")]) {
          if (
            this[_0x4a7a("0xb")] == 0x194 &&
            hls[_0x4a7a("0x3c")] == videoErrorSrc
          )
            console[_0x4a7a("0x22")](
              "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
              videoSrc
            );
          else
            this[_0x4a7a("0xb")] == 0xc8 &&
              hls[_0x4a7a("0x3c")] == videoErrorSrc &&
              (console[_0x4a7a("0x22")](_0x4a7a("0x3e")),
              (element2Monitor[_0x4a7a("0x3d")] = _0x4a7a("0x5")),
              (somethingChanged = ![]),
              (video[_0x4a7a("0x19")] = ![]),
              hls[_0x4a7a("0x3")](),
              hls[_0x4a7a("0x31")](videoSrc),
              hls[_0x4a7a("0x4")](video),
              video["play"]());
        }
      }),
      _0x41c17c[_0x4a7a("0x2a")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitorHLSNative();
function onlineMonitorHLSNative() {
  var _0x3d4004 = new XMLHttpRequest();
  _0x3d4004[_0x4a7a("0x1f")]("HEAD", videoSrc),
    (_0x3d4004[_0x4a7a("0x23")] = function () {
      if (this[_0x4a7a("0x14")] == this[_0x4a7a("0x39")]) {
        if (this[_0x4a7a("0xb")] == 0x194 && video["src"] == videoSrc)
          console[_0x4a7a("0x22")](_0x4a7a("0x1a"), videoSrc),
            (video[_0x4a7a("0x19")] = !![]),
            (video[_0x4a7a("0x3f")] = videoErrorSrc),
            video[_0x4a7a("0x40")](),
            video[_0x4a7a("0x38")]();
        else
          this["status"] == 0xc8 &&
            video[_0x4a7a("0x3f")] == videoErrorSrc &&
            (console[_0x4a7a("0x22")](_0x4a7a("0x3e")),
            (video[_0x4a7a("0x19")] = ![]),
            (video[_0x4a7a("0x3f")] = videoSrc),
            video[_0x4a7a("0x40")](),
            video[_0x4a7a("0x38")]());
      }
    }),
    _0x3d4004[_0x4a7a("0x2a")](),
    setTimeout(onlineMonitorHLSNative, 0x1f40);
}
typeof hls === _0x4a7a("0x1b") &&
  (document[_0x4a7a("0x27")](_0x4a7a("0x25"))[_0x4a7a("0x32")][
    _0x4a7a("0x0")
  ] = _0x4a7a("0x26"));
