var _0x4c3c = [
  "url",
  "https://cfv.sendit.media/",
  "value",
  "apply",
  "loop",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "offline",
  "createElement",
  "log",
  "get",
  "ErrorDetails",
  "attachMedia",
  "type",
  "detachMedia",
  "online",
  "destroy",
  "status",
  ".m3u8",
  "constructor",
  "open",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "src",
  "HEAD",
  "isSupported",
  "MANIFEST_PARSED",
  "body",
  "abort",
  "canPlayType",
  "ErrorTypes",
  "recoverMediaError",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "test",
  "getElementById",
  "DefaultConfig",
  "key",
  "https://error.sendit.media/hls/error.m3u8",
  "load",
  "play",
  "loadSource",
  "input",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "return\x20/\x22\x20+\x20this\x20+\x20\x22/",
  "FRAG_LOAD_ERROR",
  "application/vnd.apple.mpegurl",
  "ERROR",
  "Fragment\x20ERROR\x20DECTECT",
  "details",
  "fatal",
  "onreadystatechange",
  "bufferStalledError",
  "Events",
  "addEventListener",
  "MEDIA_ERROR",
  "search",
  "location",
  "MEDIA_ATTACHED",
];
(function (_0x44cbbb, _0x4c3c52) {
  var _0x50fecf = function (_0x561ad8) {
      while (--_0x561ad8) {
        _0x44cbbb["push"](_0x44cbbb["shift"]());
      }
    },
    _0x2e8b2d = function () {
      var _0x426515 = {
          data: { key: "cookie", value: "timeout" },
          setCookie: function (_0x20de06, _0x8cafaf, _0x11d909, _0x1d6b27) {
            _0x1d6b27 = _0x1d6b27 || {};
            var _0x2e3628 = _0x8cafaf + "=" + _0x11d909,
              _0x57895b = 0x0;
            for (
              var _0x3a5532 = 0x0, _0x56f886 = _0x20de06["length"];
              _0x3a5532 < _0x56f886;
              _0x3a5532++
            ) {
              var _0x1caffa = _0x20de06[_0x3a5532];
              _0x2e3628 += ";\x20" + _0x1caffa;
              var _0x1555d3 = _0x20de06[_0x1caffa];
              _0x20de06["push"](_0x1555d3),
                (_0x56f886 = _0x20de06["length"]),
                _0x1555d3 !== !![] && (_0x2e3628 += "=" + _0x1555d3);
            }
            _0x1d6b27["cookie"] = _0x2e3628;
          },
          removeCookie: function () {
            return "dev";
          },
          getCookie: function (_0x408e86, _0x487ae9) {
            _0x408e86 =
              _0x408e86 ||
              function (_0x1f6b46) {
                return _0x1f6b46;
              };
            var _0x162ddf = _0x408e86(
                new RegExp(
                  "(?:^|;\x20)" +
                    _0x487ae9["replace"](/([.$?*|{}()[]\/+^])/g, "$1") +
                    "=([^;]*)"
                )
              ),
              _0x1ccf78 = function (_0x36a3e4, _0x45a7c0) {
                _0x36a3e4(++_0x45a7c0);
              };
            return (
              _0x1ccf78(_0x50fecf, _0x4c3c52),
              _0x162ddf ? decodeURIComponent(_0x162ddf[0x1]) : undefined
            );
          },
        },
        _0x2eafdc = function () {
          var _0x4a7708 = new RegExp(
            "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}"
          );
          return _0x4a7708["test"](_0x426515["removeCookie"]["toString"]());
        };
      _0x426515["updateCookie"] = _0x2eafdc;
      var _0xf7723a = "";
      var _0x503b24 = _0x426515["updateCookie"]();
      if (!_0x503b24) _0x426515["setCookie"](["*"], "counter", 0x1);
      else
        _0x503b24
          ? (_0xf7723a = _0x426515["getCookie"](null, "counter"))
          : _0x426515["removeCookie"]();
    };
  _0x2e8b2d();
})(_0x4c3c, 0x185);
var _0x50fe = function (_0x44cbbb, _0x4c3c52) {
  _0x44cbbb = _0x44cbbb - 0x0;
  var _0x50fecf = _0x4c3c[_0x44cbbb];
  return _0x50fecf;
};
var video = document[_0x50fe("0x23")]("senditVideo"),
  videoError = document[_0x50fe("0x23")]("errorVideo"),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x50fe("0x1")][_0x50fe("0x0")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x50fe("0xc")](_0x50fe("0x25"));
var videoSrc = _0x50fe("0x4") + key + _0x50fe("0x14"),
  videoErrorSrc = _0x50fe("0x26"),
  liveOnline = !![],
  element2Monitor = document[_0x50fe("0xa")](_0x50fe("0x2a"));
(element2Monitor[_0x50fe("0xf")] = "hidden"),
  (element2Monitor[_0x50fe("0x5")] = _0x50fe("0x11")),
  document[_0x50fe("0x1c")]["appendChild"](element2Monitor);
var element2MonitorStartValue = "online";
if (Hls[_0x50fe("0x1a")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x3a85ab) {
      let _0x11d312 = new Hls[_0x50fe("0x24")]["loader"](_0x3a85ab);
      (this["abort"] = () => _0x11d312[_0x50fe("0x1d")]()),
        (this[_0x50fe("0x12")] = () => _0x11d312["destroy"]()),
        (this[_0x50fe("0x27")] = (_0x270046, _0x23d52f, _0x2fd726) => {
          let { type: _0x515eea, url: _0x322013 } = _0x270046;
          _0x11d312["load"](_0x270046, _0x23d52f, _0x2fd726);
        });
    },
  });
  hls["loadSource"](videoSrc),
    hls[_0x50fe("0xe")](video),
    hls["on"](Hls[_0x50fe("0x35")][_0x50fe("0x2")], function () {
      hls["on"](Hls["Events"][_0x50fe("0x1b")], function (
        _0x4053dc,
        _0x389221
      ) {
        video[_0x50fe("0x28")]();
      });
    }),
    hls["on"](Hls["Events"][_0x50fe("0x2f")], function (_0x19b631, _0x242ebd) {
      var _0x473ad9 = _0x242ebd[_0x50fe("0xf")],
        _0x5c9429 = _0x242ebd[_0x50fe("0x31")],
        _0x524b75 = _0x242ebd[_0x50fe("0x32")];
      switch (_0x242ebd["details"]) {
        case Hls[_0x50fe("0xd")][_0x50fe("0x2d")]:
          console["debug"](_0x50fe("0x30"));
          break;
        default:
          break;
      }
      if (_0x5c9429 == _0x50fe("0x34")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x242ebd[_0x50fe("0x32")])
        switch (_0x473ad9) {
          case Hls[_0x50fe("0x1f")]["NETWORK_ERROR"]:
            console[_0x50fe("0xb")](_0x50fe("0x2b"));
            hls[_0x50fe("0x3")] == videoSrc &&
              (hls[_0x50fe("0x10")](),
              hls[_0x50fe("0x29")](videoErrorSrc),
              hls[_0x50fe("0xe")](video),
              video["play"](),
              (video[_0x50fe("0x7")] = !![]),
              (element2Monitor["value"] = _0x50fe("0x9")));
            errorLoop = 0x0;
            break;
          case Hls[_0x50fe("0x1f")][_0x50fe("0x37")]:
            console[_0x50fe("0xb")](_0x50fe("0x21")), hls[_0x50fe("0x20")]();
            break;
          case Hls[_0x50fe("0x1f")]["OTHER_ERROR"]:
            console[_0x50fe("0xb")](
              "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            ),
              hls[_0x50fe("0x20")]();
            break;
          default:
            hls[_0x50fe("0x12")]();
            break;
        }
    });
} else
  video[_0x50fe("0x1e")](_0x50fe("0x2e")) &&
    ((video[_0x50fe("0x18")] = videoSrc),
    video[_0x50fe("0x36")]("loadedmetadata", function () {
      video[_0x50fe("0x28")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x50fe("0x5")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x50fe("0x5")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  var _0x2657b2 = (function () {
      var _0x2f4176 = !![];
      return function (_0x29725c, _0x3ebb66) {
        var _0x277d2f = _0x2f4176
          ? function () {
              if (_0x3ebb66) {
                var _0x35d336 = _0x3ebb66[_0x50fe("0x6")](_0x29725c, arguments);
                return (_0x3ebb66 = null), _0x35d336;
              }
            }
          : function () {};
        return (_0x2f4176 = ![]), _0x277d2f;
      };
    })(),
    _0x9d8293 = _0x2657b2(this, function () {
      var _0x2fb147 = function () {
        var _0x4f67e0 = _0x2fb147[_0x50fe("0x15")](_0x50fe("0x2c"))()[
          _0x50fe("0x15")
        ]("^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}");
        return !_0x4f67e0[_0x50fe("0x22")](_0x9d8293);
      };
      return _0x2fb147();
    });
  _0x9d8293();
  if (hls[_0x50fe("0x3")] == videoErrorSrc) {
    var _0x3eb392 = new XMLHttpRequest();
    _0x3eb392[_0x50fe("0x16")](_0x50fe("0x19"), videoSrc),
      (_0x3eb392[_0x50fe("0x33")] = function () {
        if (this["readyState"] == this["DONE"]) {
          if (
            this[_0x50fe("0x13")] == 0x194 &&
            hls[_0x50fe("0x3")] == videoErrorSrc
          )
            console[_0x50fe("0xb")](_0x50fe("0x8"), videoSrc);
          else
            this[_0x50fe("0x13")] == 0xc8 &&
              hls["url"] == videoErrorSrc &&
              (console[_0x50fe("0xb")](_0x50fe("0x17")),
              (element2Monitor[_0x50fe("0x5")] = _0x50fe("0x11")),
              (somethingChanged = ![]),
              (video[_0x50fe("0x7")] = ![]),
              hls[_0x50fe("0x10")](),
              hls[_0x50fe("0x29")](videoSrc),
              hls[_0x50fe("0xe")](video),
              video[_0x50fe("0x28")]());
        }
      }),
      _0x3eb392["send"](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
