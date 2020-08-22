var _0x2240 = [
  "getElementById",
  "ErrorTypes",
  "open",
  "ERROR",
  "NETWORK_ERROR",
  "createElement",
  "fatal",
  "get",
  "recoverMediaError",
  "appendChild",
  "value",
  "bufferStalledError",
  "load",
  "location",
  "addEventListener",
  "hidden",
  "HEAD",
  "log",
  "destroy",
  "send",
  "Events",
  "loop",
  "abort",
  "status",
  "DefaultConfig",
  "MEDIA_ERROR",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "online",
  "readyState",
  "detachMedia",
  "details",
  "loadedmetadata",
  "input",
  "loadSource",
  "application/vnd.apple.mpegurl",
  "Fragment\x20ERROR\x20DECTECT",
  "OTHER_ERROR",
  "body",
  "onreadystatechange",
  "play",
  "url",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "offline",
  "canPlayType",
  "errorVideo",
  "search",
  "attachMedia",
  "type",
  "MEDIA_ATTACHED",
  "src",
  "MANIFEST_PARSED",
  ".m3u8",
  "https://error.sendit.media/hls/error.m3u8",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "isSupported",
];
(function (_0x4ae5e6, _0x22409d) {
  var _0x5e956d = function (_0x53b01b) {
    while (--_0x53b01b) {
      _0x4ae5e6["push"](_0x4ae5e6["shift"]());
    }
  };
  _0x5e956d(++_0x22409d);
})(_0x2240, 0x19e);
var _0x5e95 = function (_0x4ae5e6, _0x22409d) {
  _0x4ae5e6 = _0x4ae5e6 - 0x0;
  var _0x5e956d = _0x2240[_0x4ae5e6];
  return _0x5e956d;
};
var video = document[_0x5e95("0x1a")]("senditVideo"),
  videoError = document[_0x5e95("0x1a")](_0x5e95("0xf")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x5e95("0x27")][_0x5e95("0x10")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x5e95("0x21")]("key");
var videoSrc = "https://cfv.sendit.media/" + key + _0x5e95("0x16"),
  videoErrorSrc = _0x5e95("0x17"),
  liveOnline = !![],
  element2Monitor = document[_0x5e95("0x1f")](_0x5e95("0x3"));
(element2Monitor[_0x5e95("0x12")] = _0x5e95("0x29")),
  (element2Monitor["value"] = _0x5e95("0x35")),
  document[_0x5e95("0x8")][_0x5e95("0x23")](element2Monitor);
var element2MonitorStartValue = _0x5e95("0x35");
if (Hls[_0x5e95("0x19")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x5219ab) {
      let _0x48fd66 = new Hls[_0x5e95("0x32")]["loader"](_0x5219ab);
      (this[_0x5e95("0x30")] = () => _0x48fd66[_0x5e95("0x30")]()),
        (this["destroy"] = () => _0x48fd66[_0x5e95("0x2c")]()),
        (this[_0x5e95("0x26")] = (_0x19151a, _0xef079e, _0x221034) => {
          let { type: _0x18137e, url: _0x1d0918 } = _0x19151a;
          _0x48fd66[_0x5e95("0x26")](_0x19151a, _0xef079e, _0x221034);
        });
    },
  });
  hls[_0x5e95("0x4")](videoSrc),
    hls[_0x5e95("0x11")](video),
    hls["on"](Hls[_0x5e95("0x2e")][_0x5e95("0x13")], function () {
      hls["on"](Hls[_0x5e95("0x2e")][_0x5e95("0x15")], function (
        _0x49d918,
        _0x4f5de3
      ) {
        video[_0x5e95("0xa")]();
      });
    }),
    hls["on"](Hls[_0x5e95("0x2e")][_0x5e95("0x1d")], function (
      _0xe8c0ed,
      _0x259c50
    ) {
      var _0x3be164 = _0x259c50["type"],
        _0xa84647 = _0x259c50["details"],
        _0x3027e1 = _0x259c50[_0x5e95("0x20")];
      switch (_0x259c50[_0x5e95("0x1")]) {
        case Hls["ErrorDetails"]["FRAG_LOAD_ERROR"]:
          console["debug"](_0x5e95("0x6"));
          break;
        default:
          break;
      }
      if (_0xa84647 == _0x5e95("0x25")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x259c50["fatal"])
        switch (_0x3be164) {
          case Hls[_0x5e95("0x1b")][_0x5e95("0x1e")]:
            console[_0x5e95("0x2b")](_0x5e95("0xc"));
            hls[_0x5e95("0xb")] == videoSrc &&
              (hls["detachMedia"](),
              hls["loadSource"](videoErrorSrc),
              hls[_0x5e95("0x11")](video),
              video[_0x5e95("0xa")](),
              (video[_0x5e95("0x2f")] = !![]),
              (element2Monitor[_0x5e95("0x24")] = _0x5e95("0xd")));
            errorLoop = 0x0;
            break;
          case Hls[_0x5e95("0x1b")][_0x5e95("0x33")]:
            console[_0x5e95("0x2b")](_0x5e95("0x18")), hls[_0x5e95("0x22")]();
            break;
          case Hls["ErrorTypes"][_0x5e95("0x7")]:
            console[_0x5e95("0x2b")](_0x5e95("0x34")), hls[_0x5e95("0x22")]();
            break;
          default:
            hls[_0x5e95("0x2c")]();
            break;
        }
    });
} else
  video[_0x5e95("0xe")](_0x5e95("0x5")) &&
    ((video[_0x5e95("0x14")] = videoSrc),
    video[_0x5e95("0x28")](_0x5e95("0x2"), function () {
      video[_0x5e95("0xa")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x5e95("0x24")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x5e95("0x24")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls[_0x5e95("0xb")] == videoErrorSrc) {
    var _0x3a64f7 = new XMLHttpRequest();
    _0x3a64f7[_0x5e95("0x1c")](_0x5e95("0x2a"), videoSrc),
      (_0x3a64f7[_0x5e95("0x9")] = function () {
        if (this[_0x5e95("0x36")] == this["DONE"]) {
          if (
            this[_0x5e95("0x31")] == 0x194 &&
            hls[_0x5e95("0xb")] == videoErrorSrc
          )
            console[_0x5e95("0x2b")](
              "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
              videoSrc
            );
          else
            this[_0x5e95("0x31")] == 0xc8 &&
              hls[_0x5e95("0xb")] == videoErrorSrc &&
              (console[_0x5e95("0x2b")](
                "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it"
              ),
              (element2Monitor[_0x5e95("0x24")] = _0x5e95("0x35")),
              (somethingChanged = ![]),
              (video["loop"] = ![]),
              hls[_0x5e95("0x0")](),
              hls[_0x5e95("0x4")](videoSrc),
              hls[_0x5e95("0x11")](video),
              video[_0x5e95("0xa")]());
        }
      }),
      _0x3a64f7[_0x5e95("0x2d")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
