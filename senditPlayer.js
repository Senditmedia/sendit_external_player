var _0x1074 = [
  "play",
  "https://cfvb.sendit.media/VvXzMyND8Q24kYlE.m3u8",
  "recoverMediaError",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "isSupported",
  "MEDIA_ATTACHED",
  "ErrorDetails",
  "senditVideo",
  "createElement",
  "hidden",
  "NETWORK_ERROR",
  "status",
  "loadedmetadata",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "OTHER_ERROR",
  "application/vnd.apple.mpegurl",
  "debug",
  "Events",
  "open",
  "url",
  "https://error.sendit.media/hls/error.m3u8",
  "HEAD",
  "load",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "details",
  "value",
  "Fragment\x20ERROR\x20DECTECT",
  "readyState",
  "destroy",
  "log",
  "FRAG_LOAD_ERROR",
  "detachMedia",
  "offline",
  "canPlayType",
  "abort",
  "src",
  "appendChild",
  "online",
  "DefaultConfig",
  "MEDIA_ERROR",
  "attachMedia",
  "bufferStalledError",
  "MANIFEST_PARSED",
  "getElementById",
  "errorVideo",
  "ErrorTypes",
  "DONE",
  "fatal",
  "type",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "send",
  "loadSource",
  "body",
];
(function (_0x598d09, _0x1074f9) {
  var _0x5a07bd = function (_0x4784de) {
    while (--_0x4784de) {
      _0x598d09["push"](_0x598d09["shift"]());
    }
  };
  _0x5a07bd(++_0x1074f9);
})(_0x1074, 0x1dc);
var _0x5a07 = function (_0x598d09, _0x1074f9) {
  _0x598d09 = _0x598d09 - 0x0;
  var _0x5a07bd = _0x1074[_0x598d09];
  return _0x5a07bd;
};
var video = document[_0x5a07("0x2c")](_0x5a07("0x8")),
  videoError = document["getElementById"](_0x5a07("0x2d")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  videoSrc = _0x5a07("0x2"),
  videoErrorSrc = _0x5a07("0x15"),
  liveOnline = !![],
  element2Monitor = document[_0x5a07("0x9")]("input");
(element2Monitor[_0x5a07("0x31")] = _0x5a07("0xa")),
  (element2Monitor[_0x5a07("0x1a")] = _0x5a07("0x26")),
  document[_0x5a07("0x0")][_0x5a07("0x25")](element2Monitor);
var element2MonitorStartValue = _0x5a07("0x26");
if (Hls[_0x5a07("0x5")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    pLoader: function (_0xab4b0d) {
      let _0x2de055 = new Hls[_0x5a07("0x27")]["loader"](_0xab4b0d);
      (this[_0x5a07("0x23")] = () => _0x2de055[_0x5a07("0x23")]()),
        (this[_0x5a07("0x1d")] = () => _0x2de055[_0x5a07("0x1d")]()),
        (this[_0x5a07("0x17")] = (_0x114bcf, _0x2f8285, _0x4252d6) => {
          let { type: _0x88795e, url: _0x4b9c14 } = _0x114bcf;
          _0x2de055[_0x5a07("0x17")](_0x114bcf, _0x2f8285, _0x4252d6);
        });
    },
  });
  hls[_0x5a07("0x34")](videoSrc),
    hls[_0x5a07("0x29")](video),
    hls["on"](Hls["Events"][_0x5a07("0x6")], function () {
      hls["on"](Hls[_0x5a07("0x12")][_0x5a07("0x2b")], function (
        _0xc5beb8,
        _0x30d1cb
      ) {
        video[_0x5a07("0x1")]();
      });
    }),
    hls["on"](Hls[_0x5a07("0x12")]["ERROR"], function (_0x595a61, _0x93315b) {
      var _0x539954 = _0x93315b[_0x5a07("0x31")],
        _0x540225 = _0x93315b["details"],
        _0x3b8cba = _0x93315b["fatal"];
      switch (_0x93315b[_0x5a07("0x19")]) {
        case Hls[_0x5a07("0x7")][_0x5a07("0x1f")]:
          console[_0x5a07("0x11")](_0x5a07("0x1b"));
          break;
        default:
          break;
      }
      if (_0x540225 == _0x5a07("0x2a")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x93315b[_0x5a07("0x30")])
        switch (_0x539954) {
          case Hls["ErrorTypes"][_0x5a07("0xb")]:
            console["log"](_0x5a07("0x18"));
            hls[_0x5a07("0x14")] == videoSrc &&
              (hls[_0x5a07("0x20")](),
              hls[_0x5a07("0x34")](videoErrorSrc),
              hls[_0x5a07("0x29")](video),
              video[_0x5a07("0x1")](),
              (element2Monitor["value"] = _0x5a07("0x21")));
            errorLoop = 0x0;
            break;
          case Hls[_0x5a07("0x2e")][_0x5a07("0x28")]:
            console["log"](_0x5a07("0x4")), hls[_0x5a07("0x3")]();
            break;
          case Hls[_0x5a07("0x2e")][_0x5a07("0xf")]:
            console[_0x5a07("0x1e")](_0x5a07("0xe")), hls[_0x5a07("0x3")]();
            break;
          default:
            hls[_0x5a07("0x1d")]();
            break;
        }
    });
} else
  video[_0x5a07("0x22")](_0x5a07("0x10")) &&
    ((video[_0x5a07("0x24")] = videoSrc),
    video["addEventListener"](_0x5a07("0xd"), function () {
      video[_0x5a07("0x1")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor["value"] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x5a07("0x1a")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls[_0x5a07("0x14")] == videoErrorSrc) {
    var _0x250d14 = new XMLHttpRequest();
    _0x250d14[_0x5a07("0x13")](_0x5a07("0x16"), videoSrc),
      (_0x250d14["onreadystatechange"] = function () {
        if (this[_0x5a07("0x1c")] == this[_0x5a07("0x2f")]) {
          if (
            this[_0x5a07("0xc")] == 0x194 &&
            hls[_0x5a07("0x14")] == videoErrorSrc
          )
            console[_0x5a07("0x1e")](
              "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
              videoErrorSrc
            );
          else
            this[_0x5a07("0xc")] == 0xc8 &&
              hls["url"] == videoErrorSrc &&
              (console[_0x5a07("0x1e")](_0x5a07("0x32")),
              hls[_0x5a07("0x20")](),
              hls[_0x5a07("0x34")](videoSrc),
              hls[_0x5a07("0x29")](video),
              video[_0x5a07("0x1")]());
        }
      }),
      _0x250d14[_0x5a07("0x33")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
