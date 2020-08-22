var _0x3831 = [
  "MANIFEST_PARSED",
  "FRAG_LOAD_ERROR",
  "NETWORK_ERROR",
  "attachMedia",
  "detachMedia",
  "MEDIA_ERROR",
  "onreadystatechange",
  "offline",
  "createElement",
  "senditVideo",
  ".m3u8",
  "type",
  "return\x20/\x22\x20+\x20this\x20+\x20\x22/",
  "load",
  "^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}",
  "status",
  "loadSource",
  "appendChild",
  "application/vnd.apple.mpegurl",
  "HEAD",
  "constructor",
  "location",
  "DefaultConfig",
  "bufferStalledError",
  "details",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "value",
  "https://cfv.sendit.media/",
  "addEventListener",
  "destroy",
  "DONE",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "getElementById",
  "open",
  "fatal",
  "MEDIA_ATTACHED",
  "loop",
  "body",
  "isSupported",
  "log",
  "hidden",
  "ErrorTypes",
  "OTHER_ERROR",
  "get",
  "url",
  "Events",
  "src",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "Fragment\x20ERROR\x20DECTECT",
  "send",
  "loader",
  "apply",
  "ErrorDetails",
  "ERROR",
  "readyState",
  "play",
  "abort",
  "errorVideo",
  "search",
  "online",
];
(function (_0x2efbfa, _0x38315d) {
  var _0x2b00f6 = function (_0x2517a7) {
      while (--_0x2517a7) {
        _0x2efbfa["push"](_0x2efbfa["shift"]());
      }
    },
    _0x5cbc29 = function () {
      var _0x504644 = {
          data: { key: "cookie", value: "timeout" },
          setCookie: function (_0x1e3782, _0x1448d1, _0x430faa, _0x26dcf6) {
            _0x26dcf6 = _0x26dcf6 || {};
            var _0xc7c946 = _0x1448d1 + "=" + _0x430faa,
              _0x710061 = 0x0;
            for (
              var _0x5c36ec = 0x0, _0x1405f2 = _0x1e3782["length"];
              _0x5c36ec < _0x1405f2;
              _0x5c36ec++
            ) {
              var _0x1b17e5 = _0x1e3782[_0x5c36ec];
              _0xc7c946 += ";\x20" + _0x1b17e5;
              var _0x2ccc44 = _0x1e3782[_0x1b17e5];
              _0x1e3782["push"](_0x2ccc44),
                (_0x1405f2 = _0x1e3782["length"]),
                _0x2ccc44 !== !![] && (_0xc7c946 += "=" + _0x2ccc44);
            }
            _0x26dcf6["cookie"] = _0xc7c946;
          },
          removeCookie: function () {
            return "dev";
          },
          getCookie: function (_0x44e088, _0x5bb28e) {
            _0x44e088 =
              _0x44e088 ||
              function (_0x5b31f3) {
                return _0x5b31f3;
              };
            var _0x3b68b9 = _0x44e088(
                new RegExp(
                  "(?:^|;\x20)" +
                    _0x5bb28e["replace"](/([.$?*|{}()[]\/+^])/g, "$1") +
                    "=([^;]*)"
                )
              ),
              _0x2feb82 = function (_0x93995d, _0x5f5cd7) {
                _0x93995d(++_0x5f5cd7);
              };
            return (
              _0x2feb82(_0x2b00f6, _0x38315d),
              _0x3b68b9 ? decodeURIComponent(_0x3b68b9[0x1]) : undefined
            );
          },
        },
        _0x4a148f = function () {
          var _0xe5fb3c = new RegExp(
            "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}"
          );
          return _0xe5fb3c["test"](_0x504644["removeCookie"]["toString"]());
        };
      _0x504644["updateCookie"] = _0x4a148f;
      var _0x13179c = "";
      var _0x87068 = _0x504644["updateCookie"]();
      if (!_0x87068) _0x504644["setCookie"](["*"], "counter", 0x1);
      else
        _0x87068
          ? (_0x13179c = _0x504644["getCookie"](null, "counter"))
          : _0x504644["removeCookie"]();
    };
  _0x5cbc29();
})(_0x3831, 0x129);
var _0x2b00 = function (_0x2efbfa, _0x38315d) {
  _0x2efbfa = _0x2efbfa - 0x0;
  var _0x2b00f6 = _0x3831[_0x2efbfa];
  return _0x2b00f6;
};
var video = document[_0x2b00("0x23")](_0x2b00("0xc")),
  videoError = document["getElementById"](_0x2b00("0x0")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x2b00("0x18")][_0x2b00("0x1")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x2b00("0x2e")]("key");
var videoSrc = _0x2b00("0x1e") + key + _0x2b00("0xd"),
  videoErrorSrc = "https://error.sendit.media/hls/error.m3u8",
  liveOnline = !![],
  element2Monitor = document[_0x2b00("0xb")]("input");
(element2Monitor[_0x2b00("0xe")] = _0x2b00("0x2b")),
  (element2Monitor[_0x2b00("0x1d")] = "online"),
  document[_0x2b00("0x28")][_0x2b00("0x14")](element2Monitor);
var element2MonitorStartValue = "online";
if (Hls[_0x2b00("0x29")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x165953) {
      let _0x156003 = new Hls[_0x2b00("0x19")][_0x2b00("0x35")](_0x165953);
      (this[_0x2b00("0x3b")] = () => _0x156003[_0x2b00("0x3b")]()),
        (this[_0x2b00("0x20")] = () => _0x156003["destroy"]()),
        (this["load"] = (_0x144104, _0x401119, _0xc0f5b5) => {
          let { type: _0x518d99, url: _0x5b946c } = _0x144104;
          _0x156003[_0x2b00("0x10")](_0x144104, _0x401119, _0xc0f5b5);
        });
    },
  });
  hls["loadSource"](videoSrc),
    hls[_0x2b00("0x6")](video),
    hls["on"](Hls[_0x2b00("0x30")][_0x2b00("0x26")], function () {
      hls["on"](Hls["Events"][_0x2b00("0x3")], function (_0x588799, _0x465a20) {
        video[_0x2b00("0x3a")]();
      });
    }),
    hls["on"](Hls[_0x2b00("0x30")][_0x2b00("0x38")], function (
      _0x140274,
      _0x58d6a8
    ) {
      var _0x69fb4 = _0x58d6a8[_0x2b00("0xe")],
        _0x24bcf6 = _0x58d6a8[_0x2b00("0x1b")],
        _0x55bf2c = _0x58d6a8[_0x2b00("0x25")];
      switch (_0x58d6a8[_0x2b00("0x1b")]) {
        case Hls[_0x2b00("0x37")][_0x2b00("0x4")]:
          console["debug"](_0x2b00("0x33"));
          break;
        default:
          break;
      }
      if (_0x24bcf6 == _0x2b00("0x1a")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x58d6a8[_0x2b00("0x25")])
        switch (_0x69fb4) {
          case Hls[_0x2b00("0x2c")][_0x2b00("0x5")]:
            console[_0x2b00("0x2a")](_0x2b00("0x1c"));
            hls["url"] == videoSrc &&
              (hls[_0x2b00("0x7")](),
              hls["loadSource"](videoErrorSrc),
              hls[_0x2b00("0x6")](video),
              video[_0x2b00("0x3a")](),
              (video[_0x2b00("0x27")] = !![]),
              (element2Monitor[_0x2b00("0x1d")] = _0x2b00("0xa")));
            errorLoop = 0x0;
            break;
          case Hls[_0x2b00("0x2c")][_0x2b00("0x8")]:
            console[_0x2b00("0x2a")](_0x2b00("0x32")),
              hls["recoverMediaError"]();
            break;
          case Hls[_0x2b00("0x2c")][_0x2b00("0x2d")]:
            console[_0x2b00("0x2a")](
              "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            ),
              hls["recoverMediaError"]();
            break;
          default:
            hls[_0x2b00("0x20")]();
            break;
        }
    });
} else
  video["canPlayType"](_0x2b00("0x15")) &&
    ((video[_0x2b00("0x31")] = videoSrc),
    video[_0x2b00("0x1f")]("loadedmetadata", function () {
      video[_0x2b00("0x3a")]();
    }));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x2b00("0x1d")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x2b00("0x1d")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  var _0x8478ac = (function () {
      var _0x158e14 = !![];
      return function (_0x2eab42, _0x3a3538) {
        var _0x55fba2 = _0x158e14
          ? function () {
              if (_0x3a3538) {
                var _0x3bbf36 = _0x3a3538[_0x2b00("0x36")](
                  _0x2eab42,
                  arguments
                );
                return (_0x3a3538 = null), _0x3bbf36;
              }
            }
          : function () {};
        return (_0x158e14 = ![]), _0x55fba2;
      };
    })(),
    _0x2e7ed1 = _0x8478ac(this, function () {
      var _0x1254ed = function () {
        var _0x18f64a = _0x1254ed[_0x2b00("0x17")](_0x2b00("0xf"))()[
          "constructor"
        ](_0x2b00("0x11"));
        return !_0x18f64a["test"](_0x2e7ed1);
      };
      return _0x1254ed();
    });
  _0x2e7ed1();
  if (hls["url"] == videoErrorSrc) {
    var _0x2cb724 = new XMLHttpRequest();
    _0x2cb724[_0x2b00("0x24")](_0x2b00("0x16"), videoSrc),
      (_0x2cb724[_0x2b00("0x9")] = function () {
        if (this[_0x2b00("0x39")] == this[_0x2b00("0x21")]) {
          if (
            this[_0x2b00("0x12")] == 0x194 &&
            hls[_0x2b00("0x2f")] == videoErrorSrc
          )
            console[_0x2b00("0x2a")](_0x2b00("0x22"), videoSrc);
          else
            this[_0x2b00("0x12")] == 0xc8 &&
              hls[_0x2b00("0x2f")] == videoErrorSrc &&
              (console[_0x2b00("0x2a")](
                "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it"
              ),
              (element2Monitor["value"] = _0x2b00("0x2")),
              (somethingChanged = ![]),
              (video[_0x2b00("0x27")] = ![]),
              hls[_0x2b00("0x7")](),
              hls[_0x2b00("0x13")](videoSrc),
              hls[_0x2b00("0x6")](video),
              video[_0x2b00("0x3a")]());
        }
      }),
      _0x2cb724[_0x2b00("0x34")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
