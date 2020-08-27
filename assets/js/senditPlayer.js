var _0x19fc = [
  "readyState",
  "appendChild",
  "open",
  "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT",
  "debug",
  "attachMedia",
  "url",
  "ErrorTypes",
  "application/vnd.apple.mpegurl",
  "MANIFEST_PARSED",
  "onreadystatechange",
  "fatal",
  "errorVideo",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "log",
  "canPlayType",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "HEAD",
  "MEDIA_ATTACHED",
  "getElementById",
  "recoverMediaError",
  "offline",
  ".m3u8",
  "loadSource",
  "ErrorDetails",
  "NETWORK_ERROR",
  "loader",
  "body",
  "createElement",
  "https://error.sendit.media/hls/error.m3u8",
  "https://cfv.sendit.media/",
  "type",
  "ERROR",
  "play",
  "value",
  "senditVideo",
  "bufferStalledError",
  "hidden",
  "DefaultConfig",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "isSupported",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "online",
  "Events",
  "load",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "detachMedia",
  "loop",
  "details",
  "FRAG_LOAD_ERROR",
  "muted",
  "get",
  "src",
  "OTHER_ERROR",
  "DONE",
  "reloadOnError()",
  "key",
  "send",
  "search",
  "input",
  "location",
  "abort",
  "destroy",
  "status",
];
(function (_0x1651ed, _0x19fc9f) {
  var _0x1dbc51 = function (_0x34ab9a) {
    while (--_0x34ab9a) {
      _0x1651ed["push"](_0x1651ed["shift"]());
    }
  };
  _0x1dbc51(++_0x19fc9f);
})(_0x19fc, 0xc1);
var _0x1dbc = function (_0x1651ed, _0x19fc9f) {
  _0x1651ed = _0x1651ed - 0x0;
  var _0x1dbc51 = _0x19fc[_0x1651ed];
  return _0x1dbc51;
};
var video = document[_0x1dbc("0x12")](_0x1dbc("0x22")),
  videoError = document[_0x1dbc("0x12")](_0x1dbc("0xb")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  somethingChanged = ![];
const queryString = window[_0x1dbc("0x3b")][_0x1dbc("0x39")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x1dbc("0x32")](_0x1dbc("0x37"));
var videoSrc = _0x1dbc("0x1d") + key + _0x1dbc("0x15"),
  videoErrorSrc = _0x1dbc("0x1c"),
  liveOnline = !![],
  errorCount = 0x0,
  stalledCount = 0x0,
  element2Monitor = document[_0x1dbc("0x1b")](_0x1dbc("0x3a"));
(element2Monitor[_0x1dbc("0x1e")] = _0x1dbc("0x24")),
  (element2Monitor["value"] = _0x1dbc("0x29")),
  document[_0x1dbc("0x1a")][_0x1dbc("0x0")](element2Monitor);
var element2MonitorStartValue = _0x1dbc("0x29"),
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls[_0x1dbc("0x27")]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: 0x3,
    autoLevelEnabled: !![],
    pLoader: function (_0x237194) {
      let _0x54cb7a = new Hls[_0x1dbc("0x25")][_0x1dbc("0x19")](_0x237194);
      (this[_0x1dbc("0x3c")] = () => _0x54cb7a[_0x1dbc("0x3c")]()),
        (this["destroy"] = () => _0x54cb7a["destroy"]()),
        (this[_0x1dbc("0x2b")] = (_0x32ee46, _0x446b2d, _0x53b212) => {
          let { type: _0x3ed34a, url: _0x18581 } = _0x32ee46;
          _0x54cb7a[_0x1dbc("0x2b")](_0x32ee46, _0x446b2d, _0x53b212);
        });
    },
  });
  hls[_0x1dbc("0x16")](videoSrc),
    hls["attachMedia"](video),
    hls["on"](Hls[_0x1dbc("0x2a")][_0x1dbc("0x11")], function () {
      hls["on"](Hls[_0x1dbc("0x2a")][_0x1dbc("0x8")], function (
        _0x3b5cf1,
        _0xa6bea6
      ) {
        video[_0x1dbc("0x20")]();
      });
    }),
    hls["on"](Hls[_0x1dbc("0x2a")][_0x1dbc("0x1f")], function (
      _0x2d4981,
      _0x188bc2
    ) {
      var _0x595ce7 = _0x188bc2[_0x1dbc("0x1e")],
        _0x540492 = _0x188bc2[_0x1dbc("0x2f")],
        _0x1f7f61 = _0x188bc2[_0x1dbc("0xa")];
      switch (_0x188bc2[_0x1dbc("0x2f")]) {
        case Hls[_0x1dbc("0x17")][_0x1dbc("0x30")]:
          console[_0x1dbc("0x3")](_0x1dbc("0x2"));
          break;
        default:
          break;
      }
      if (_0x540492 == _0x1dbc("0x23")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x188bc2[_0x1dbc("0xa")])
        switch (_0x595ce7) {
          case Hls[_0x1dbc("0x6")][_0x1dbc("0x18")]:
            console[_0x1dbc("0xd")](_0x1dbc("0x2c"));
            hls[_0x1dbc("0x5")] == videoSrc &&
              (hls[_0x1dbc("0x2d")](),
              hls[_0x1dbc("0x16")](videoErrorSrc),
              hls["attachMedia"](video),
              video[_0x1dbc("0x20")](),
              (video[_0x1dbc("0x2e")] = !![]),
              (element2Monitor[_0x1dbc("0x21")] = _0x1dbc("0x14")));
            errorLoop = 0x0;
            break;
          case Hls["ErrorTypes"]["MEDIA_ERROR"]:
            console[_0x1dbc("0xd")](_0x1dbc("0x26")), hls[_0x1dbc("0x13")]();
            break;
          case Hls[_0x1dbc("0x6")][_0x1dbc("0x34")]:
            console[_0x1dbc("0xd")](_0x1dbc("0xc")), hls[_0x1dbc("0x13")]();
            break;
          default:
            hls[_0x1dbc("0x3d")]();
            break;
        }
    });
  function track_change() {
    element2Monitor[_0x1dbc("0x21")] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x1dbc("0x21")]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else {
  if (video[_0x1dbc("0xe")](_0x1dbc("0x7"))) {
    (hlsOrHtmlPlayer = ![]),
      (video[_0x1dbc("0x33")] = videoSrc),
      video["setAttribute"]("onerror", _0x1dbc("0x36"));
    function reloadOnError() {
      errorCount == 0x0 &&
        ((video["src"] = videoErrorSrc),
        (video[_0x1dbc("0x31")] = !![]),
        (video["loop"] = !![]),
        video[_0x1dbc("0x2b")](),
        video[_0x1dbc("0x20")](),
        errorCount == 0x1);
    }
  }
}
function onlineMonitor() {
  if (hls[_0x1dbc("0x5")] == videoErrorSrc) {
    var _0x31041d = new XMLHttpRequest();
    _0x31041d[_0x1dbc("0x1")](_0x1dbc("0x10"), videoSrc),
      (_0x31041d[_0x1dbc("0x9")] = function () {
        if (this[_0x1dbc("0x3f")] == this[_0x1dbc("0x35")]) {
          if (
            this[_0x1dbc("0x3e")] == 0x194 &&
            hls[_0x1dbc("0x5")] == videoErrorSrc
          )
            console[_0x1dbc("0xd")](_0x1dbc("0xf"), videoSrc);
          else
            this[_0x1dbc("0x3e")] == 0xc8 &&
              hls[_0x1dbc("0x5")] == videoErrorSrc &&
              (console[_0x1dbc("0xd")](_0x1dbc("0x28")),
              (element2Monitor[_0x1dbc("0x21")] = _0x1dbc("0x29")),
              (somethingChanged = ![]),
              (video[_0x1dbc("0x2e")] = ![]),
              hls["detachMedia"](),
              hls[_0x1dbc("0x16")](videoSrc),
              hls[_0x1dbc("0x4")](video),
              video[_0x1dbc("0x20")]());
        }
      }),
      _0x31041d[_0x1dbc("0x38")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitorHLSNative();
function onlineMonitorHLSNative() {
  var _0x46b296 = new XMLHttpRequest();
  _0x46b296[_0x1dbc("0x1")]("HEAD", videoSrc),
    (_0x46b296["onreadystatechange"] = function () {
      if (this[_0x1dbc("0x3f")] == this[_0x1dbc("0x35")]) {
        if (
          this[_0x1dbc("0x3e")] == 0x194 &&
          video[_0x1dbc("0x33")] == videoSrc
        )
          console[_0x1dbc("0xd")](
            "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
            videoSrc
          ),
            (video[_0x1dbc("0x2e")] = !![]),
            (video["src"] = videoErrorSrc),
            video[_0x1dbc("0x2b")](),
            video[_0x1dbc("0x20")]();
        else
          this[_0x1dbc("0x3e")] == 0xc8 &&
            video[_0x1dbc("0x33")] == videoErrorSrc &&
            (console[_0x1dbc("0xd")](_0x1dbc("0x28")),
            (video[_0x1dbc("0x2e")] = ![]),
            (video["src"] = videoSrc),
            video[_0x1dbc("0x2b")](),
            video[_0x1dbc("0x20")]());
      }
    }),
    _0x46b296[_0x1dbc("0x38")](),
    setTimeout(onlineMonitorHLSNative, 0x1f40);
}
