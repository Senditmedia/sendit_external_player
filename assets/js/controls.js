const _0x5892 = [
  "ended",
  "canPlayType",
  "animate",
  "duration",
  "quality_2",
  "getBoundingClientRect",
  "target",
  "hide",
  "seconds",
  "quality_-1",
  "fullscreenElement",
  "selected",
  "volume",
  "toggle",
  "requestPictureInPicture",
  "volume-button",
  "exitFullscreen",
  ".playback-icons\x20use",
  "DOMContentLoaded",
  "querySelector",
  "volumechange",
  "style",
  "pictureInPictureElement",
  "createElement",
  "mouseleave",
  "textContent",
  "progress-bar",
  "addEventListener",
  ".volume-button\x20use",
  "forEach",
  "use[href=\x22#volume-mute\x22]",
  "classList",
  "offsetX",
  "getElementById",
  "round",
  "fullscreenchange",
  "disabled",
  "click",
  "undefined",
  "video-controls",
  "pip-button",
  "paused",
  "remove",
  "fullscreen-button",
  "seek-tooltip",
  "toISOString",
  "substr",
  "dataset",
  "max",
  "controls",
  "muted",
  "nextLevel",
  "hidden",
  "quality_1",
  "keyup",
  "quality_0",
  "mouseenter",
  "add",
  "left",
  "play",
  "requestFullscreen",
  "seek",
  "pause",
  "input",
  "timeupdate",
  "minutes",
  "data-seek",
  "use[href=\x22#volume-high\x22]",
  "clientWidth",
  "querySelectorAll",
  "scale(1.3)",
  "time-elapsed",
  "value",
  "senditVideo",
  "use",
];
(function (_0x159bf6, _0x589286) {
  const _0x43cfee = function (_0x190e00) {
    while (--_0x190e00) {
      _0x159bf6["push"](_0x159bf6["shift"]());
    }
  };
  _0x43cfee(++_0x589286);
})(_0x5892, 0xbe);
const _0x43cf = function (_0x159bf6, _0x589286) {
  _0x159bf6 = _0x159bf6 - 0x0;
  let _0x43cfee = _0x5892[_0x159bf6];
  return _0x43cfee;
};
const video = document[_0x43cf("0x44")](_0x43cf("0x21")),
  videoControls = document[_0x43cf("0x44")](_0x43cf("0x4a")),
  playButton = document[_0x43cf("0x44")](_0x43cf("0x13")),
  playbackIcons = document["querySelectorAll"](_0x43cf("0x34")),
  timeElapsed = document[_0x43cf("0x44")](_0x43cf("0x1f")),
  duration = document["getElementById"](_0x43cf("0x26")),
  progressBar = document["getElementById"](_0x43cf("0x3d")),
  seek = document[_0x43cf("0x44")](_0x43cf("0x15")),
  seekTooltip = document[_0x43cf("0x44")](_0x43cf("0x4")),
  volumeButton = document[_0x43cf("0x44")](_0x43cf("0x32")),
  volumeIcons = document[_0x43cf("0x1d")](_0x43cf("0x3f")),
  volumeMute = document[_0x43cf("0x36")](_0x43cf("0x41")),
  volumeLow = document[_0x43cf("0x36")]("use[href=\x22#volume-low\x22]"),
  volumeHigh = document[_0x43cf("0x36")](_0x43cf("0x1b")),
  volume = document[_0x43cf("0x44")](_0x43cf("0x2f")),
  playbackAnimation = document[_0x43cf("0x44")]("playback-animation"),
  fullscreenButton = document[_0x43cf("0x44")](_0x43cf("0x3")),
  videoContainer = document[_0x43cf("0x44")]("video-container"),
  fullscreenIcons = fullscreenButton[_0x43cf("0x1d")](_0x43cf("0x22")),
  pipButton = document[_0x43cf("0x44")](_0x43cf("0x0"));
function setQuality() {
  if (typeof hls === _0x43cf("0x49")) {
  } else {
    var _0x48ffce;
    if (document[_0x43cf("0x44")](_0x43cf("0x2c"))[_0x43cf("0x2e")])
      _0x48ffce = document["getElementById"](_0x43cf("0x2c"))["value"];
    else {
      if (document["getElementById"](_0x43cf("0xf"))[_0x43cf("0x2e")])
        _0x48ffce = document[_0x43cf("0x44")](_0x43cf("0xf"))[_0x43cf("0x20")];
      else {
        if (document["getElementById"](_0x43cf("0xd"))[_0x43cf("0x2e")])
          _0x48ffce = document[_0x43cf("0x44")](_0x43cf("0xd"))["value"];
        else
          document["getElementById"]("quality_2")["selected"] &&
            (_0x48ffce = document[_0x43cf("0x44")](_0x43cf("0x27"))["value"]);
      }
    }
    hls[_0x43cf("0xb")] = Number(_0x48ffce);
  }
}
const videoWorks = !!document[_0x43cf("0x3a")]("video")[_0x43cf("0x24")];
videoWorks &&
  ((video[_0x43cf("0x9")] = ![]),
  videoControls["classList"][_0x43cf("0x2")](_0x43cf("0xc")));
function togglePlay() {
  video[_0x43cf("0x1")] || video[_0x43cf("0x23")]
    ? video[_0x43cf("0x13")]()
    : video["pause"]();
}
function updatePlayButton() {
  playbackIcons[_0x43cf("0x40")]((_0x220edc) =>
    _0x220edc[_0x43cf("0x42")][_0x43cf("0x30")](_0x43cf("0xc"))
  );
  if (video[_0x43cf("0x1")]) {
  } else {
  }
}
function formatTime(_0x5df00f) {
  const _0x348052 = new Date(_0x5df00f * 0x3e8)
    [_0x43cf("0x5")]()
    [_0x43cf("0x6")](0xb, 0x8);
  return {
    minutes: _0x348052[_0x43cf("0x6")](0x3, 0x2),
    seconds: _0x348052[_0x43cf("0x6")](0x6, 0x2),
  };
}
function initializeVideo() {
  const _0x41fd98 = Math[_0x43cf("0x45")](video[_0x43cf("0x26")]);
}
function updateTimeElapsed() {}
function updateProgress() {}
function updateSeekTooltip(_0x2f6499) {
  const _0x2a9431 = Math[_0x43cf("0x45")](
    (_0x2f6499[_0x43cf("0x43")] / _0x2f6499[_0x43cf("0x29")][_0x43cf("0x1c")]) *
      parseInt(_0x2f6499[_0x43cf("0x29")]["getAttribute"](_0x43cf("0x8")), 0xa)
  );
  seek["setAttribute"](_0x43cf("0x1a"), _0x2a9431);
  const _0x47482e = formatTime(_0x2a9431);
  seekTooltip[_0x43cf("0x3c")] =
    _0x47482e[_0x43cf("0x19")] + ":" + _0x47482e[_0x43cf("0x2b")];
  const _0x5eb588 = video[_0x43cf("0x28")]();
  seekTooltip[_0x43cf("0x38")][_0x43cf("0x12")] =
    _0x2f6499["pageX"] - _0x5eb588[_0x43cf("0x12")] + "px";
}
function skipAhead(_0xf66a6f) {
  const _0x51f9cc = _0xf66a6f["target"][_0x43cf("0x7")][_0x43cf("0x15")]
    ? _0xf66a6f["target"]["dataset"][_0x43cf("0x15")]
    : _0xf66a6f[_0x43cf("0x29")]["value"];
  (video["currentTime"] = _0x51f9cc),
    (progressBar[_0x43cf("0x20")] = _0x51f9cc),
    (seek["value"] = _0x51f9cc);
}
function updateVolume() {
  video[_0x43cf("0xa")] && (video[_0x43cf("0xa")] = ![]),
    (video[_0x43cf("0x2f")] = volume[_0x43cf("0x20")]);
}
function updateVolumeIcon() {
  volumeIcons[_0x43cf("0x40")]((_0x553360) => {
    _0x553360[_0x43cf("0x42")][_0x43cf("0x11")](_0x43cf("0xc"));
  });
  if (video[_0x43cf("0xa")] || video[_0x43cf("0x2f")] === 0x0)
    volumeMute[_0x43cf("0x42")][_0x43cf("0x2")](_0x43cf("0xc"));
  else
    video[_0x43cf("0x2f")] > 0x0 && video[_0x43cf("0x2f")] <= 0.5
      ? volumeLow[_0x43cf("0x42")]["remove"](_0x43cf("0xc"))
      : volumeHigh[_0x43cf("0x42")][_0x43cf("0x2")](_0x43cf("0xc"));
}
function toggleMute() {
  (video["muted"] = !video[_0x43cf("0xa")]),
    video[_0x43cf("0xa")]
      ? (volume[_0x43cf("0x20")] = 0x0)
      : (volume[_0x43cf("0x20")] = volume[_0x43cf("0x7")][_0x43cf("0x2f")]);
}
function animatePlayback() {
  playbackAnimation[_0x43cf("0x25")](
    [
      { opacity: 0x0, transform: "scale(1)" },
      { opacity: 0x0, transform: _0x43cf("0x1e") },
    ],
    { duration: 0x1f4 }
  );
}
function toggleFullScreen() {
  document[_0x43cf("0x2d")]
    ? document[_0x43cf("0x33")]()
    : videoContainer[_0x43cf("0x14")]();
}
function updateFullscreenButton() {
  fullscreenIcons[_0x43cf("0x40")]((_0x358314) =>
    _0x358314[_0x43cf("0x42")][_0x43cf("0x30")]("hidden")
  );
  if (document[_0x43cf("0x2d")]) {
  } else {
  }
}
async function togglePip() {
  try {
    video !== document[_0x43cf("0x39")]
      ? ((pipButton[_0x43cf("0x47")] = !![]), await video[_0x43cf("0x31")]())
      : await document["exitPictureInPicture"]();
  } catch (_0x5d51b5) {
    console["error"](_0x5d51b5);
  } finally {
    pipButton[_0x43cf("0x47")] = ![];
  }
}
function hideControls() {
  if (video[_0x43cf("0x1")]) return;
  videoControls[_0x43cf("0x42")][_0x43cf("0x11")](_0x43cf("0x2a"));
}
function showControls() {
  videoControls[_0x43cf("0x42")][_0x43cf("0x2")]("hide");
}
function keyboardShortcuts(_0x2e43be) {
  const { key: _0x293037 } = _0x2e43be;
  switch (_0x293037) {
    case "k":
      togglePlay(), animatePlayback();
      video[_0x43cf("0x1")]
        ? showControls()
        : setTimeout(() => {
            hideControls();
          }, 0x7d0);
      break;
    case "m":
      toggleMute();
      break;
    case "f":
      toggleFullScreen();
      break;
    case "p":
      togglePip();
      break;
  }
}
playButton[_0x43cf("0x3e")]("click", togglePlay),
  video[_0x43cf("0x3e")](_0x43cf("0x13"), updatePlayButton),
  video[_0x43cf("0x3e")](_0x43cf("0x16"), updatePlayButton),
  video[_0x43cf("0x3e")]("loadedmetadata", initializeVideo),
  video[_0x43cf("0x3e")](_0x43cf("0x18"), updateTimeElapsed),
  video[_0x43cf("0x3e")](_0x43cf("0x18"), updateProgress),
  video[_0x43cf("0x3e")](_0x43cf("0x37"), updateVolumeIcon),
  video[_0x43cf("0x3e")]("click", togglePlay),
  video[_0x43cf("0x3e")](_0x43cf("0x10"), showControls),
  video[_0x43cf("0x3e")](_0x43cf("0x3b"), hideControls),
  videoControls[_0x43cf("0x3e")](_0x43cf("0x10"), showControls),
  videoControls[_0x43cf("0x3e")](_0x43cf("0x3b"), hideControls),
  volume["addEventListener"](_0x43cf("0x17"), updateVolume),
  volumeButton[_0x43cf("0x3e")](_0x43cf("0x48"), toggleMute),
  fullscreenButton["addEventListener"](_0x43cf("0x48"), toggleFullScreen),
  videoContainer[_0x43cf("0x3e")](_0x43cf("0x46"), updateFullscreenButton),
  pipButton["addEventListener"]("click", togglePip),
  document[_0x43cf("0x3e")](_0x43cf("0x35"), () => {
    !("pictureInPictureEnabled" in document) &&
      pipButton[_0x43cf("0x42")][_0x43cf("0x11")](_0x43cf("0xc"));
  }),
  document[_0x43cf("0x3e")](_0x43cf("0xe"), keyboardShortcuts);
