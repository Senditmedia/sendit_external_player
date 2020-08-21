var _0x4d03 = [
  "OTHER_ERROR",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "detachMedia",
  "senditVideo",
  "loadedmetadata",
  "MANIFEST_PARSED",
  "body",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "debug",
  "FRAG_LOAD_ERROR",
  "ERROR",
  "log",
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  "src",
  "loader",
  "status",
  "onreadystatechange",
  "details",
  "loadSource",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "appendChild",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "url",
  "getElementById",
  "play",
  "https://cfvb.sendit.media/VvXzMyND8Q24kYlE.m3u8",
  "Events",
  "type",
  "input",
  "abort",
  "online",
  "offline",
  "MEDIA_ATTACHED",
  "readyState",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "errorVideo",
  "attachMedia",
  "fatal",
  "createElement",
  "recoverMediaError",
  "addEventListener",
  "Fragment\x20ERROR\x20DECTECT",
  "bufferStalledError",
  "DONE",
  "send",
  "open",
  "load",
  "destroy",
  "HEAD",
  "isSupported",
  "DefaultConfig",
  "value",
  "ErrorTypes",
];
(function (_0x11fad5, _0x4d03e4) {
  var _0x3b0039 = function (_0x501635) {
    while (--_0x501635) {
      _0x11fad5["push"](_0x11fad5["shift"]());
    }
  };
  _0x3b0039(++_0x4d03e4);
})(_0x4d03, 0xaf);
var _0x3b00 = function (_0x11fad5, _0x4d03e4) {
  _0x11fad5 = _0x11fad5 - 0x0;
  var _0x3b0039 = _0x4d03[_0x11fad5];
  return _0x3b0039;
};
var video = document["getElementById"](_0x3b00("0x28")),
  videoError = document[_0x3b00("0x7")](_0x3b00("0x13")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  videoSrc = _0x3b00("0x9"),
  videoErrorSrc = _0x3b00("0x31"),
  liveOnline = !![],
  element2Monitor = document[_0x3b00("0x16")](_0x3b00("0xc"));
(element2Monitor[_0x3b00("0xb")] = "hidden"),
  (element2Monitor[_0x3b00("0x23")] = _0x3b00("0xe")),
  document[_0x3b00("0x2b")][_0x3b00("0x4")](element2Monitor);
var element2MonitorStartValue = _0x3b00("0xe");
if (Hls[_0x3b00("0x21")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    pLoader: function (_0x2ffcad) {
      let _0x2851cc = new Hls[_0x3b00("0x22")][_0x3b00("0x33")](_0x2ffcad);
      (this[_0x3b00("0xd")] = () => _0x2851cc["abort"]()),
        (this[_0x3b00("0x1f")] = () => _0x2851cc[_0x3b00("0x1f")]()),
        (this[_0x3b00("0x1e")] = (_0x363d8b, _0x5f5a92, _0x20c25b) => {
          let { type: _0x41702d, url: _0x34d183 } = _0x363d8b;
          _0x2851cc[_0x3b00("0x1e")](_0x363d8b, _0x5f5a92, _0x20c25b);
        });
    },
  });
  hls[_0x3b00("0x2")](videoSrc),
    hls["attachMedia"](video),
    hls["on"](Hls["Events"][_0x3b00("0x10")], function () {
      hls["on"](Hls[_0x3b00("0xa")][_0x3b00("0x2a")], function (
        _0xc440,
        _0x41ed4a
      ) {
        video[_0x3b00("0x8")]();
      });
    }),
    hls["on"](Hls[_0x3b00("0xa")][_0x3b00("0x2f")], function (
      _0x564a2e,
      _0x894bee
    ) {
      var _0x326ad7 = _0x894bee[_0x3b00("0xb")],
        _0x22ec02 = _0x894bee[_0x3b00("0x1")],
        _0x50b323 = _0x894bee[_0x3b00("0x15")];
      switch (_0x894bee[_0x3b00("0x1")]) {
        case Hls["ErrorDetails"][_0x3b00("0x2e")]:
          console[_0x3b00("0x2d")](_0x3b00("0x19"));
          break;
        default:
          break;
      }
      if (_0x22ec02 == _0x3b00("0x1a")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x894bee[_0x3b00("0x15")])
        switch (_0x326ad7) {
          case Hls[_0x3b00("0x24")]["NETWORK_ERROR"]:
            console[_0x3b00("0x30")](_0x3b00("0x5"));
            hls[_0x3b00("0x6")] ==
              "https://cfvb.sendit.media/VvXzMyND8Q24kYlE.m3u8" &&
              (hls[_0x3b00("0x27")](),
              hls[_0x3b00("0x2")](_0x3b00("0x31")),
              hls[_0x3b00("0x14")](video),
              video[_0x3b00("0x8")](),
              (element2Monitor[_0x3b00("0x23")] = _0x3b00("0xf")));
            errorLoop = 0x0;
            break;
          case Hls[_0x3b00("0x24")]["MEDIA_ERROR"]:
            console[_0x3b00("0x30")](_0x3b00("0x3")), hls[_0x3b00("0x17")]();
            break;
          case Hls[_0x3b00("0x24")][_0x3b00("0x25")]:
            console["log"](_0x3b00("0x2c")), hls["recoverMediaError"]();
            break;
          default:
            hls[_0x3b00("0x1f")]();
            break;
        }
    });
} else
  video["canPlayType"]("application/vnd.apple.mpegurl") &&
    ((video[_0x3b00("0x32")] = videoSrc),
    video[_0x3b00("0x18")](_0x3b00("0x29"), function () {
      video[_0x3b00("0x8")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor["value"] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor["value"]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls[_0x3b00("0x6")] == videoErrorSrc) {
    var _0x2474ca = new XMLHttpRequest();
    _0x2474ca[_0x3b00("0x1d")](_0x3b00("0x20"), videoSrc),
      (_0x2474ca[_0x3b00("0x0")] = function () {
        if (this[_0x3b00("0x11")] == this[_0x3b00("0x1b")]) {
          if (this[_0x3b00("0x34")] == 0x194 && hls["url"] == videoErrorSrc)
            console[_0x3b00("0x30")](_0x3b00("0x12"), videoErrorSrc);
          else
            this[_0x3b00("0x34")] == 0xc8 &&
              hls[_0x3b00("0x6")] == videoErrorSrc &&
              (console["log"](_0x3b00("0x26")),
              hls[_0x3b00("0x27")](),
              hls[_0x3b00("0x2")](videoSrc),
              hls[_0x3b00("0x14")](video),
              video[_0x3b00("0x8")]());
        }
      }),
      _0x2474ca[_0x3b00("0x1c")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
