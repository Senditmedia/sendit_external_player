var _0x1c57 = [
  "bufferStalledError",
  "attachMedia",
  "value",
  "details",
  "getElementById",
  "DONE",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "readyState",
  "addEventListener",
  "loader",
  "Events",
  "debug",
  "online",
  "load",
  "MANIFEST_PARSED",
  "application/vnd.apple.mpegurl",
  "recoverMediaError",
  "loadSource",
  "ErrorDetails",
  "search",
  "https://error.sendit.media/hls/error.m3u8",
  "status",
  "get",
  "ERROR",
  ".m3u8",
  "input",
  "url",
  "createElement",
  "isSupported",
  "loadedmetadata",
  "body",
  "play",
  "send",
  "OTHER_ERROR",
  "ErrorTypes",
  "senditVideo",
  "offline",
  "detachMedia",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "FRAG_LOAD_ERROR",
  "https://cfv.sendit.media/",
  "type",
  "MEDIA_ERROR",
  "Fragment\x20ERROR\x20DECTECT",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "location",
  "key",
  "HEAD",
  "destroy",
  "onreadystatechange",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "log",
  "fatal",
  "src",
  "open",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "errorVideo",
  "appendChild",
];
(function (_0x4e450f, _0x1c57b3) {
  var _0x12cb41 = function (_0x43379b) {
    while (--_0x43379b) {
      _0x4e450f["push"](_0x4e450f["shift"]());
    }
  };
  _0x12cb41(++_0x1c57b3);
})(_0x1c57, 0x1ad);
var _0x12cb = function (_0x4e450f, _0x1c57b3) {
  _0x4e450f = _0x4e450f - 0x0;
  var _0x12cb41 = _0x1c57[_0x4e450f];
  return _0x12cb41;
};
var video = document[_0x12cb("0x27")](_0x12cb("0xc")),
  videoError = document[_0x12cb("0x27")](_0x12cb("0x21")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x12cb("0x16")][_0x12cb("0x36")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x12cb("0x39")](_0x12cb("0x17"));
console[_0x12cb("0x1c")](key);
var videoSrc = _0x12cb("0x11") + key + _0x12cb("0x1"),
  videoErrorSrc = _0x12cb("0x37"),
  liveOnline = !![],
  element2Monitor = document[_0x12cb("0x4")](_0x12cb("0x2"));
(element2Monitor[_0x12cb("0x12")] = "hidden"),
  (element2Monitor[_0x12cb("0x25")] = "online"),
  document[_0x12cb("0x7")][_0x12cb("0x22")](element2Monitor);
var element2MonitorStartValue = _0x12cb("0x2f");
if (Hls[_0x12cb("0x5")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    pLoader: function (_0x339041) {
      let _0x533f6d = new Hls["DefaultConfig"][_0x12cb("0x2c")](_0x339041);
      (this["abort"] = () => _0x533f6d["abort"]()),
        (this["destroy"] = () => _0x533f6d[_0x12cb("0x19")]()),
        (this["load"] = (_0x203e9d, _0x2adaa3, _0x5e5b1c) => {
          let { type: _0xeb152c, url: _0x3d1079 } = _0x203e9d;
          _0x533f6d[_0x12cb("0x30")](_0x203e9d, _0x2adaa3, _0x5e5b1c);
        });
    },
  });
  hls["loadSource"](videoSrc),
    hls[_0x12cb("0x24")](video),
    hls["on"](Hls[_0x12cb("0x2d")]["MEDIA_ATTACHED"], function () {
      hls["on"](Hls[_0x12cb("0x2d")][_0x12cb("0x31")], function (
        _0x4b3fcc,
        _0x2af966
      ) {
        video[_0x12cb("0x8")]();
      });
    }),
    hls["on"](Hls["Events"][_0x12cb("0x0")], function (_0x523d93, _0x3d7178) {
      var _0x3c80a4 = _0x3d7178[_0x12cb("0x12")],
        _0x50bc2d = _0x3d7178[_0x12cb("0x26")],
        _0x4f78f6 = _0x3d7178["fatal"];
      switch (_0x3d7178[_0x12cb("0x26")]) {
        case Hls[_0x12cb("0x35")][_0x12cb("0x10")]:
          console[_0x12cb("0x2e")](_0x12cb("0x14"));
          break;
        default:
          break;
      }
      if (_0x50bc2d == _0x12cb("0x23")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x3d7178[_0x12cb("0x1d")])
        switch (_0x3c80a4) {
          case Hls["ErrorTypes"]["NETWORK_ERROR"]:
            console[_0x12cb("0x1c")](_0x12cb("0x29"));
            hls[_0x12cb("0x3")] == videoSrc &&
              (hls[_0x12cb("0xe")](),
              hls[_0x12cb("0x34")](videoErrorSrc),
              hls[_0x12cb("0x24")](video),
              video[_0x12cb("0x8")](),
              (element2Monitor[_0x12cb("0x25")] = _0x12cb("0xd")));
            errorLoop = 0x0;
            break;
          case Hls[_0x12cb("0xb")][_0x12cb("0x13")]:
            console[_0x12cb("0x1c")](_0x12cb("0x15")), hls[_0x12cb("0x33")]();
            break;
          case Hls[_0x12cb("0xb")][_0x12cb("0xa")]:
            console[_0x12cb("0x1c")](_0x12cb("0x20")), hls[_0x12cb("0x33")]();
            break;
          default:
            hls[_0x12cb("0x19")]();
            break;
        }
    });
} else
  video["canPlayType"](_0x12cb("0x32")) &&
    ((video[_0x12cb("0x1e")] = videoSrc),
    video[_0x12cb("0x2b")](_0x12cb("0x6"), function () {
      video[_0x12cb("0x8")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor["value"] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x12cb("0x25")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls["url"] == videoErrorSrc) {
    var _0x4543af = new XMLHttpRequest();
    _0x4543af[_0x12cb("0x1f")](_0x12cb("0x18"), videoSrc),
      (_0x4543af[_0x12cb("0x1a")] = function () {
        if (this[_0x12cb("0x2a")] == this[_0x12cb("0x28")]) {
          if (
            this[_0x12cb("0x38")] == 0x194 &&
            hls[_0x12cb("0x3")] == videoErrorSrc
          )
            console[_0x12cb("0x1c")](_0x12cb("0x1b"), videoErrorSrc);
          else
            this[_0x12cb("0x38")] == 0xc8 &&
              hls[_0x12cb("0x3")] == videoErrorSrc &&
              (console["log"](_0x12cb("0xf")),
              hls["detachMedia"](),
              hls["loadSource"](videoSrc),
              hls[_0x12cb("0x24")](video),
              video[_0x12cb("0x8")]());
        }
      }),
      _0x4543af[_0x12cb("0x9")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
