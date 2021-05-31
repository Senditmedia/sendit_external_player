var _0x1343 = [
  "mousemove",
  "attachMedia",
  "add",
  "MEDIA_ERROR",
  "get",
  "loop",
  "classList",
  "src",
  "load",
  "offline",
  "addEventListener",
  "detachMedia",
  "online",
  "location",
  "911513XILwYY",
  "fatal",
  "onerror",
  "/playlist.m3u8",
  "DONE",
  "onreadystatechange",
  "1iAkSUO",
  "log",
  "reloadOnError()",
  "1165615TKTivc",
  "details",
  "none",
  "play",
  "video-controls",
  "MEDIA_ATTACHED",
  "hidden",
  "https://external.sendit.media/vod/",
  "search",
  "type",
  "661625GYJWpm",
  "ErrorDetails",
  "muted",
  "bufferStalledError",
  "44201ndatUz",
  "HEAD",
  "appendChild",
  "Mouse\x20idle\x20for\x203\x20sec",
  "OTHER_ERROR",
  "Events",
  "ErrorTypes",
  "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT",
  "loader",
  "2929tMPGxU",
  "74738jIVGZw",
  "https://error.sendit.media/hls/error.m3u8",
  "readyState",
  "value",
  "549iJuboT",
  "ERROR",
  "abort",
  "contains",
  "loadSource",
  "url",
  "recoverMediaError",
  "https://cfv.sendit.media/",
  "undefined",
  "destroy",
  "status",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "body",
  "isSupported",
  "debug",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "898821yZibIw",
  "application/vnd.apple.mpegurl",
  "open",
  "1eZfyDn",
  "NETWORK_ERROR",
  "input",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "hidden-controls",
  "1BMJPPO",
  "FRAG_LOAD_ERROR",
  "setAttribute",
  "getElementById",
  "display",
];
var _0x48dc48 = _0x5c89;
(function (_0x1bfe0f, _0x4256a1) {
  var _0x4b4e40 = _0x5c89;
  while (!![]) {
    try {
      var _0x229714 =
        parseInt(_0x4b4e40(0xf1)) * parseInt(_0x4b4e40(0xf4)) +
        -parseInt(_0x4b4e40(0xfe)) +
        parseInt(_0x4b4e40(0x10c)) +
        parseInt(_0x4b4e40(0x110)) * -parseInt(_0x4b4e40(0x10b)) +
        -parseInt(_0x4b4e40(0xeb)) * -parseInt(_0x4b4e40(0x128)) +
        parseInt(_0x4b4e40(0x102)) * parseInt(_0x4b4e40(0x123)) +
        parseInt(_0x4b4e40(0x120));
      if (_0x229714 === _0x4256a1) break;
      else _0x1bfe0f["push"](_0x1bfe0f["shift"]());
    } catch (_0x27e22f) {
      _0x1bfe0f["push"](_0x1bfe0f["shift"]());
    }
  }
})(_0x1343, 0xc979a);
var videoError = document["getElementById"]("errorVideo"),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  somethingChanged = ![];
const queryString = window[_0x48dc48(0xea)][_0x48dc48(0xfc)],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x48dc48(0x131)]("key"),
  vod = urlParams[_0x48dc48(0x131)]("vod");
if (vod == "" || vod == null)
  var videoSrc = _0x48dc48(0x117) + key + ".m3u8",
    videoErrorSrc = _0x48dc48(0x10d);
else
  var videoSrc = _0x48dc48(0xfb) + key + _0x48dc48(0xee),
    videoErrorSrc = "https://error.sendit.media/hls/error.m3u8";
var liveOnline = !![],
  errorCount = 0x0,
  stalledCount = 0x0,
  element2Monitor = document["createElement"](_0x48dc48(0x125));
(element2Monitor[_0x48dc48(0xfd)] = _0x48dc48(0xfa)),
  (element2Monitor["value"] = _0x48dc48(0xe9)),
  document[_0x48dc48(0x11c)][_0x48dc48(0x104)](element2Monitor);
var element2MonitorStartValue = "online",
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls[_0x48dc48(0x11d)]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: 0x3,
    autoLevelEnabled: !![],
    pLoader: function (_0xf72dbc) {
      var _0x2ae186 = _0x48dc48;
      let _0x325186 = new Hls["DefaultConfig"][_0x2ae186(0x10a)](_0xf72dbc);
      (this["abort"] = () => _0x325186[_0x2ae186(0x112)]()),
        (this[_0x2ae186(0x119)] = () => _0x325186["destroy"]()),
        (this[_0x2ae186(0xe5)] = (_0x416c19, _0x3152a8, _0x145849) => {
          var _0x1541a2 = _0x2ae186;
          let { type: _0xc6bd34, url: _0x5d60df } = _0x416c19;
          _0x325186[_0x1541a2(0xe5)](_0x416c19, _0x3152a8, _0x145849);
        });
    },
  });
  hls[_0x48dc48(0x114)](videoSrc),
    hls[_0x48dc48(0x12e)](video),
    hls["on"](Hls[_0x48dc48(0x107)][_0x48dc48(0xf9)], function () {
      var _0x329053 = _0x48dc48;
      hls["on"](
        Hls[_0x329053(0x107)]["MANIFEST_PARSED"],
        function (_0x3fa464, _0x43cc9d) {
          var _0x46b757 = _0x329053;
          video[_0x46b757(0xf7)]();
        }
      );
    }),
    hls["on"](Hls["Events"][_0x48dc48(0x111)], function (_0x59f95a, _0x147705) {
      var _0x287eac = _0x48dc48,
        _0x3a9d26 = _0x147705["type"],
        _0x6dde49 = _0x147705[_0x287eac(0xf5)],
        _0x2538dc = _0x147705[_0x287eac(0xec)];
      switch (_0x147705[_0x287eac(0xf5)]) {
        case Hls[_0x287eac(0xff)][_0x287eac(0x129)]:
          console[_0x287eac(0x11e)](_0x287eac(0x109));
          break;
        default:
          break;
      }
      if (_0x6dde49 == _0x287eac(0x101)) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x147705[_0x287eac(0xec)])
        switch (_0x3a9d26) {
          case Hls[_0x287eac(0x108)][_0x287eac(0x124)]:
            console[_0x287eac(0xf2)](_0x287eac(0x126));
            hls["url"] == videoSrc &&
              (hls[_0x287eac(0xe8)](),
              hls["loadSource"](videoErrorSrc),
              hls[_0x287eac(0x12e)](video),
              video[_0x287eac(0xf7)](),
              (video[_0x287eac(0x132)] = !![]),
              (element2Monitor[_0x287eac(0x10f)] = _0x287eac(0xe6)));
            errorLoop = 0x0;
            break;
          case Hls[_0x287eac(0x108)][_0x287eac(0x130)]:
            console[_0x287eac(0xf2)](
              "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            ),
              hls[_0x287eac(0x116)]();
            break;
          case Hls[_0x287eac(0x108)][_0x287eac(0x106)]:
            console[_0x287eac(0xf2)](
              "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            ),
              hls[_0x287eac(0x116)]();
            break;
          default:
            hls[_0x287eac(0x119)]();
            break;
        }
    });
  function track_change() {
    var _0x2c830c = _0x48dc48;
    element2Monitor[_0x2c830c(0x10f)] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x2c830c(0x10f)]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else {
  if (video["canPlayType"](_0x48dc48(0x121))) {
    (hlsOrHtmlPlayer = ![]),
      (video["src"] = videoSrc),
      video[_0x48dc48(0x12a)](_0x48dc48(0xed), _0x48dc48(0xf3));
    function reloadOnError() {
      var _0xf6c8d9 = _0x48dc48;
      errorCount == 0x0 &&
        ((video["src"] = videoErrorSrc),
        (video[_0xf6c8d9(0x100)] = !![]),
        (video[_0xf6c8d9(0x132)] = !![]),
        video["load"](),
        video[_0xf6c8d9(0xf7)](),
        errorCount == 0x1);
    }
  }
}
function onlineMonitor() {
  var _0x1aeec9 = _0x48dc48;
  if (hls[_0x1aeec9(0x115)] == videoErrorSrc) {
    var _0x29d4a3 = new XMLHttpRequest();
    _0x29d4a3[_0x1aeec9(0x122)](_0x1aeec9(0x103), videoSrc),
      (_0x29d4a3[_0x1aeec9(0xf0)] = function () {
        var _0xfedc2b = _0x1aeec9;
        if (this["readyState"] == this[_0xfedc2b(0xef)]) {
          if (this["status"] == 0x194 && hls[_0xfedc2b(0x115)] == videoErrorSrc)
            console[_0xfedc2b(0xf2)](_0xfedc2b(0x11b), videoSrc);
          else
            this[_0xfedc2b(0x11a)] == 0xc8 &&
              hls[_0xfedc2b(0x115)] == videoErrorSrc &&
              (console[_0xfedc2b(0xf2)](_0xfedc2b(0x11f)),
              (element2Monitor[_0xfedc2b(0x10f)] = "online"),
              (somethingChanged = ![]),
              (video["loop"] = ![]),
              hls[_0xfedc2b(0xe8)](),
              hls[_0xfedc2b(0x114)](videoSrc),
              hls[_0xfedc2b(0x12e)](video),
              video[_0xfedc2b(0xf7)]());
        }
      }),
      _0x29d4a3["send"](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
function _0x5c89(_0x2c7313, _0x12c59e) {
  _0x2c7313 = _0x2c7313 - 0xe3;
  var _0x13439a = _0x1343[_0x2c7313];
  return _0x13439a;
}
onlineMonitorHLSNative();
function onlineMonitorHLSNative() {
  var _0x2a3293 = _0x48dc48,
    _0x4cc8c4 = new XMLHttpRequest();
  _0x4cc8c4[_0x2a3293(0x122)]("HEAD", videoSrc),
    (_0x4cc8c4[_0x2a3293(0xf0)] = function () {
      var _0x1a9cab = _0x2a3293;
      if (this[_0x1a9cab(0x10e)] == this["DONE"]) {
        if (
          this[_0x1a9cab(0x11a)] == 0x194 &&
          video[_0x1a9cab(0xe4)] == videoSrc
        )
          console["log"](_0x1a9cab(0x11b), videoSrc),
            (video[_0x1a9cab(0x132)] = !![]),
            (video["src"] = videoErrorSrc),
            video["load"](),
            video[_0x1a9cab(0xf7)]();
        else
          this[_0x1a9cab(0x11a)] == 0xc8 &&
            video[_0x1a9cab(0xe4)] == videoErrorSrc &&
            (console[_0x1a9cab(0xf2)](_0x1a9cab(0x11f)),
            (video[_0x1a9cab(0x132)] = ![]),
            (video[_0x1a9cab(0xe4)] = videoSrc),
            video[_0x1a9cab(0xe5)](),
            video["play"]());
      }
    }),
    _0x4cc8c4["send"](),
    setTimeout(onlineMonitorHLSNative, 0x1f40);
}
typeof hls === _0x48dc48(0x118) &&
  (document[_0x48dc48(0x12b)]("quality")["style"][_0x48dc48(0x12c)] =
    _0x48dc48(0xf6));
let timeout = null;
const videoControlsDiv = document["getElementById"](_0x48dc48(0xf8));
document[_0x48dc48(0xe7)](_0x48dc48(0x12d), (_0x506793) => {
  var _0x4c163c = _0x48dc48;
  (shouldHide = ![]),
    clearTimeout(timeout),
    videoControlsDiv[_0x4c163c(0xe3)][_0x4c163c(0x113)](_0x4c163c(0x127)) &&
      videoControlsDiv[_0x4c163c(0xe3)]["remove"](_0x4c163c(0x127)),
    (timeout = setTimeout(function () {
      var _0x3b6269 = _0x4c163c;
      console["log"](_0x3b6269(0x105)),
        (shouldHide = !![]),
        videoControlsDiv[_0x3b6269(0xe3)][_0x3b6269(0x12f)]("hidden-controls");
    }, 0x7d0));
});
