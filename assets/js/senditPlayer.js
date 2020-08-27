var _0xdc19 = [
  "DefaultConfig",
  "createElement",
  "ERROR",
  "hidden",
  "attachMedia",
  "abort",
  "detachMedia",
  "NETWORK_ERROR",
  "load",
  "fatal",
  "getElementById",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "location",
  "ErrorTypes",
  "ErrorDetails",
  "MEDIA_ATTACHED",
  "key",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "src",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT",
  "loadSource",
  "play",
  "MEDIA_ERROR",
  "input",
  "offline",
  "status",
  "errorVideo",
  "debug",
  "quality",
  "undefined",
  "details",
  "FRAG_LOAD_ERROR",
  "OTHER_ERROR",
  "readyState",
  "url",
  "none",
  "body",
  "isSupported",
  "https://cfv.sendit.media/",
  "value",
  "recoverMediaError",
  "HEAD",
  "Events",
  "search",
  "destroy",
  "display",
  "send",
  "loop",
  "appendChild",
  "type",
  "online",
  "onerror",
  "log",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "https://error.sendit.media/hls/error.m3u8",
  "style",
  "open",
  "get",
  "onreadystatechange",
  "application/vnd.apple.mpegurl",
  "DONE",
];
(function (_0x52cecb, _0xdc19d3) {
  var _0x2b2899 = function (_0x103930) {
    while (--_0x103930) {
      _0x52cecb["push"](_0x52cecb["shift"]());
    }
  };
  _0x2b2899(++_0xdc19d3);
})(_0xdc19, 0x1c0);
var _0x2b28 = function (_0x52cecb, _0xdc19d3) {
  _0x52cecb = _0x52cecb - 0x0;
  var _0x2b2899 = _0xdc19[_0x52cecb];
  return _0x2b2899;
};
var videoError = document[_0x2b28("0x3a")](_0x2b28("0xd")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  somethingChanged = ![];
const queryString = window[_0x2b28("0x3c")][_0x2b28("0x1e")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x2b28("0x2c")](_0x2b28("0x2"));
var videoSrc = _0x2b28("0x19") + key + ".m3u8",
  videoErrorSrc = _0x2b28("0x29"),
  liveOnline = !![],
  errorCount = 0x0,
  stalledCount = 0x0,
  element2Monitor = document[_0x2b28("0x31")](_0x2b28("0xa"));
(element2Monitor[_0x2b28("0x24")] = _0x2b28("0x33")),
  (element2Monitor[_0x2b28("0x1a")] = _0x2b28("0x25")),
  document[_0x2b28("0x17")][_0x2b28("0x23")](element2Monitor);
var element2MonitorStartValue = _0x2b28("0x25"),
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls[_0x2b28("0x18")]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: 0x3,
    autoLevelEnabled: !![],
    pLoader: function (_0x4d2af2) {
      let _0x1d1f80 = new Hls[_0x2b28("0x30")]["loader"](_0x4d2af2);
      (this[_0x2b28("0x35")] = () => _0x1d1f80[_0x2b28("0x35")]()),
        (this["destroy"] = () => _0x1d1f80[_0x2b28("0x1f")]()),
        (this[_0x2b28("0x38")] = (_0x55cf6f, _0x451ece, _0x371bdd) => {
          let { type: _0x4c3019, url: _0x348c5d } = _0x55cf6f;
          _0x1d1f80[_0x2b28("0x38")](_0x55cf6f, _0x451ece, _0x371bdd);
        });
    },
  });
  hls[_0x2b28("0x7")](videoSrc),
    hls[_0x2b28("0x34")](video),
    hls["on"](Hls[_0x2b28("0x1d")][_0x2b28("0x1")], function () {
      hls["on"](Hls["Events"]["MANIFEST_PARSED"], function (
        _0x1e71ad,
        _0x183e1e
      ) {
        video[_0x2b28("0x8")]();
      });
    }),
    hls["on"](Hls[_0x2b28("0x1d")][_0x2b28("0x32")], function (
      _0x50c313,
      _0xf3b014
    ) {
      var _0x1c43ce = _0xf3b014["type"],
        _0x3ce2be = _0xf3b014[_0x2b28("0x11")],
        _0x1f7262 = _0xf3b014[_0x2b28("0x39")];
      switch (_0xf3b014[_0x2b28("0x11")]) {
        case Hls[_0x2b28("0x0")][_0x2b28("0x12")]:
          console[_0x2b28("0xe")](_0x2b28("0x6"));
          break;
        default:
          break;
      }
      if (_0x3ce2be == "bufferStalledError") {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0xf3b014[_0x2b28("0x39")])
        switch (_0x1c43ce) {
          case Hls[_0x2b28("0x3d")][_0x2b28("0x37")]:
            console[_0x2b28("0x27")](
              "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            );
            hls[_0x2b28("0x15")] == videoSrc &&
              (hls[_0x2b28("0x36")](),
              hls[_0x2b28("0x7")](videoErrorSrc),
              hls[_0x2b28("0x34")](video),
              video["play"](),
              (video[_0x2b28("0x22")] = !![]),
              (element2Monitor[_0x2b28("0x1a")] = _0x2b28("0xb")));
            errorLoop = 0x0;
            break;
          case Hls[_0x2b28("0x3d")][_0x2b28("0x9")]:
            console[_0x2b28("0x27")](_0x2b28("0x3b")), hls[_0x2b28("0x1b")]();
            break;
          case Hls[_0x2b28("0x3d")][_0x2b28("0x13")]:
            console["log"](_0x2b28("0x3")), hls[_0x2b28("0x1b")]();
            break;
          default:
            hls[_0x2b28("0x1f")]();
            break;
        }
    });
  function track_change() {
    element2Monitor[_0x2b28("0x1a")] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x2b28("0x1a")]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else {
  if (video["canPlayType"](_0x2b28("0x2e"))) {
    (hlsOrHtmlPlayer = ![]),
      (video["src"] = videoSrc),
      video["setAttribute"](_0x2b28("0x26"), "reloadOnError()");
    function reloadOnError() {
      errorCount == 0x0 &&
        ((video[_0x2b28("0x4")] = videoErrorSrc),
        (video["muted"] = !![]),
        (video[_0x2b28("0x22")] = !![]),
        video[_0x2b28("0x38")](),
        video[_0x2b28("0x8")](),
        errorCount == 0x1);
    }
  }
}
function onlineMonitor() {
  if (hls[_0x2b28("0x15")] == videoErrorSrc) {
    var _0xa42640 = new XMLHttpRequest();
    _0xa42640[_0x2b28("0x2b")](_0x2b28("0x1c"), videoSrc),
      (_0xa42640[_0x2b28("0x2d")] = function () {
        if (this[_0x2b28("0x14")] == this["DONE"]) {
          if (this["status"] == 0x194 && hls[_0x2b28("0x15")] == videoErrorSrc)
            console[_0x2b28("0x27")](_0x2b28("0x5"), videoSrc);
          else
            this[_0x2b28("0xc")] == 0xc8 &&
              hls[_0x2b28("0x15")] == videoErrorSrc &&
              (console[_0x2b28("0x27")](
                "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it"
              ),
              (element2Monitor["value"] = "online"),
              (somethingChanged = ![]),
              (video[_0x2b28("0x22")] = ![]),
              hls[_0x2b28("0x36")](),
              hls[_0x2b28("0x7")](videoSrc),
              hls[_0x2b28("0x34")](video),
              video[_0x2b28("0x8")]());
        }
      }),
      _0xa42640[_0x2b28("0x21")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitorHLSNative();
function onlineMonitorHLSNative() {
  var _0x45922f = new XMLHttpRequest();
  _0x45922f[_0x2b28("0x2b")](_0x2b28("0x1c"), videoSrc),
    (_0x45922f[_0x2b28("0x2d")] = function () {
      if (this["readyState"] == this[_0x2b28("0x2f")]) {
        if (this[_0x2b28("0xc")] == 0x194 && video[_0x2b28("0x4")] == videoSrc)
          console[_0x2b28("0x27")](_0x2b28("0x5"), videoSrc),
            (video[_0x2b28("0x22")] = !![]),
            (video["src"] = videoErrorSrc),
            video[_0x2b28("0x38")](),
            video[_0x2b28("0x8")]();
        else
          this[_0x2b28("0xc")] == 0xc8 &&
            video[_0x2b28("0x4")] == videoErrorSrc &&
            (console[_0x2b28("0x27")](_0x2b28("0x28")),
            (video[_0x2b28("0x22")] = ![]),
            (video["src"] = videoSrc),
            video[_0x2b28("0x38")](),
            video[_0x2b28("0x8")]());
      }
    }),
    _0x45922f[_0x2b28("0x21")](),
    setTimeout(onlineMonitorHLSNative, 0x1f40);
}
typeof hls === _0x2b28("0x10") &&
  (document[_0x2b28("0x3a")](_0x2b28("0xf"))[_0x2b28("0x2a")][
    _0x2b28("0x20")
  ] = _0x2b28("0x16"));
