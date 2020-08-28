const _0x312e = [
  "click",
  "timeupdate",
  "currentTime",
  "exitPictureInPicture",
  "quality_2",
  "dataset",
  "forEach",
  "minutes",
  "toISOString",
  "selected",
  "pictureInPictureEnabled",
  "time-elapsed",
  "use",
  "video-controls",
  "data-seek",
  "duration",
  ".volume-button\x20use",
  "style",
  "textContent",
  "remove",
  "senditVideo",
  "requestPictureInPicture",
  "progress-bar",
  "video-container",
  "requestFullscreen",
  "seconds",
  "scale(1.3)",
  "pictureInPictureElement",
  "quality_0",
  "pause",
  "value",
  "setAttribute",
  "quality_-1",
  "volume",
  "fullscreenchange",
  "seek",
  "substr",
  "paused",
  "pageX",
  "volumechange",
  "addEventListener",
  "use[href=\x22#volume-low\x22]",
  "add",
  "hide",
  "muted",
  "getElementById",
  "seek-tooltip",
  "DOMContentLoaded",
  ".playback-icons\x20use",
  "use[href=\x22#volume-high\x22]",
  "mouseleave",
  "exitFullscreen",
  "max",
  "keyup",
  "input",
  "volume-button",
  "controls",
  "querySelectorAll",
  "offsetX",
  "toggle",
  "use[href=\x22#volume-mute\x22]",
  "left",
  "fullscreen-button",
  "classList",
  "round",
  "target",
  "getAttribute",
  "hidden",
  "error",
  "playback-animation",
  "disabled",
  "clientWidth",
  "play",
  "querySelector",
  "animate",
  "ended",
  "canPlayType",
  "quality_1",
  "mouseenter",
];
(function (_0x35d63f, _0x312e79) {
  const _0x421663 = function (_0x2b10dc) {
    while (--_0x2b10dc) {
      _0x35d63f["push"](_0x35d63f["shift"]());
    }
  };
  _0x421663(++_0x312e79);
})(_0x312e, 0x146);
const _0x4216 = function (_0x35d63f, _0x312e79) {
  _0x35d63f = _0x35d63f - 0x0;
  let _0x421663 = _0x312e[_0x35d63f];
  return _0x421663;
};
const video = document["getElementById"](_0x4216("0xa")),
  videoControls = document[_0x4216("0x23")](_0x4216("0x3")),
  playButton = document[_0x4216("0x23")](_0x4216("0x3e")),
  playbackIcons = document[_0x4216("0x2f")](_0x4216("0x26")),
  timeElapsed = document["getElementById"](_0x4216("0x1")),
  duration = document["getElementById"](_0x4216("0x5")),
  progressBar = document[_0x4216("0x23")](_0x4216("0xc")),
  seek = document["getElementById"](_0x4216("0x19")),
  seekTooltip = document[_0x4216("0x23")](_0x4216("0x24")),
  volumeButton = document["getElementById"](_0x4216("0x2d")),
  volumeIcons = document["querySelectorAll"](_0x4216("0x6")),
  volumeMute = document[_0x4216("0x3f")](_0x4216("0x32")),
  volumeLow = document["querySelector"](_0x4216("0x1f")),
  volumeHigh = document["querySelector"](_0x4216("0x27")),
  volume = document[_0x4216("0x23")](_0x4216("0x17")),
  playbackAnimation = document[_0x4216("0x23")](_0x4216("0x3b")),
  fullscreenButton = document[_0x4216("0x23")](_0x4216("0x34")),
  videoContainer = document[_0x4216("0x23")](_0x4216("0xd")),
  fullscreenIcons = fullscreenButton[_0x4216("0x2f")](_0x4216("0x2")),
  pipButton = document[_0x4216("0x23")]("pip-button");
function setQuality() {
  if (typeof hls === "undefined") {
  } else {
    var _0x18ee1d;
    if (document["getElementById"](_0x4216("0x16"))["selected"])
      _0x18ee1d = document[_0x4216("0x23")]("quality_-1")[_0x4216("0x14")];
    else {
      if (document[_0x4216("0x23")](_0x4216("0x12"))[_0x4216("0x4e")])
        _0x18ee1d = document[_0x4216("0x23")](_0x4216("0x12"))["value"];
      else {
        if (document["getElementById"](_0x4216("0x43"))[_0x4216("0x4e")])
          _0x18ee1d = document[_0x4216("0x23")](_0x4216("0x43"))[
            _0x4216("0x14")
          ];
        else
          document[_0x4216("0x23")](_0x4216("0x49"))[_0x4216("0x4e")] &&
            (_0x18ee1d = document["getElementById"](_0x4216("0x49"))[
              _0x4216("0x14")
            ]);
      }
    }
    hls["nextLevel"] = Number(_0x18ee1d);
  }
}
const videoWorks = !!document["createElement"]("video")[_0x4216("0x42")];
videoWorks &&
  ((video[_0x4216("0x2e")] = ![]),
  videoControls[_0x4216("0x35")][_0x4216("0x9")](_0x4216("0x39")));
function togglePlay() {
  video[_0x4216("0x1b")] || video[_0x4216("0x41")]
    ? video["play"]()
    : video[_0x4216("0x13")]();
}
function updatePlayButton() {
  playbackIcons[_0x4216("0x4b")]((_0x47f54e) =>
    _0x47f54e["classList"][_0x4216("0x31")](_0x4216("0x39"))
  );
  if (video[_0x4216("0x1b")]) {
  } else {
  }
}
function formatTime(_0x5289e9) {
  const _0x3a3f58 = new Date(_0x5289e9 * 0x3e8)
    [_0x4216("0x4d")]()
    [_0x4216("0x1a")](0xb, 0x8);
  return {
    minutes: _0x3a3f58[_0x4216("0x1a")](0x3, 0x2),
    seconds: _0x3a3f58[_0x4216("0x1a")](0x6, 0x2),
  };
}
function initializeVideo() {
  const _0x1bccce = Math[_0x4216("0x36")](video[_0x4216("0x5")]);
}
function updateTimeElapsed() {}
function updateProgress() {}
function updateSeekTooltip(_0xc7de95) {
  const _0x2a499b = Math[_0x4216("0x36")](
    (_0xc7de95[_0x4216("0x30")] / _0xc7de95[_0x4216("0x37")][_0x4216("0x3d")]) *
      parseInt(
        _0xc7de95[_0x4216("0x37")][_0x4216("0x38")](_0x4216("0x2a")),
        0xa
      )
  );
  seek[_0x4216("0x15")](_0x4216("0x4"), _0x2a499b);
  const _0x49547c = formatTime(_0x2a499b);
  seekTooltip[_0x4216("0x8")] =
    _0x49547c[_0x4216("0x4c")] + ":" + _0x49547c[_0x4216("0xf")];
  const _0x30bcd6 = video["getBoundingClientRect"]();
  seekTooltip[_0x4216("0x7")][_0x4216("0x33")] =
    _0xc7de95[_0x4216("0x1c")] - _0x30bcd6[_0x4216("0x33")] + "px";
}
function skipAhead(_0x5a480b) {
  const _0x4854fa = _0x5a480b["target"][_0x4216("0x4a")][_0x4216("0x19")]
    ? _0x5a480b[_0x4216("0x37")][_0x4216("0x4a")]["seek"]
    : _0x5a480b[_0x4216("0x37")][_0x4216("0x14")];
  (video[_0x4216("0x47")] = _0x4854fa),
    (progressBar[_0x4216("0x14")] = _0x4854fa),
    (seek[_0x4216("0x14")] = _0x4854fa);
}
function updateVolume() {
  video["muted"] && (video["muted"] = ![]),
    (video[_0x4216("0x17")] = volume[_0x4216("0x14")]);
}
function updateVolumeIcon() {
  volumeIcons[_0x4216("0x4b")]((_0x875c74) => {
    _0x875c74["classList"][_0x4216("0x20")](_0x4216("0x39"));
  });
  if (video["muted"] || video[_0x4216("0x17")] === 0x0)
    volumeMute[_0x4216("0x35")][_0x4216("0x9")](_0x4216("0x39"));
  else
    video[_0x4216("0x17")] > 0x0 && video[_0x4216("0x17")] <= 0.5
      ? volumeLow[_0x4216("0x35")][_0x4216("0x9")](_0x4216("0x39"))
      : volumeHigh[_0x4216("0x35")][_0x4216("0x9")](_0x4216("0x39"));
}
function toggleMute() {
  (video[_0x4216("0x22")] = !video[_0x4216("0x22")]),
    video[_0x4216("0x22")]
      ? (volume["value"] = 0x0)
      : (volume[_0x4216("0x14")] = volume[_0x4216("0x4a")][_0x4216("0x17")]);
}
function animatePlayback() {
  playbackAnimation[_0x4216("0x40")](
    [
      { opacity: 0x0, transform: "scale(1)" },
      { opacity: 0x0, transform: _0x4216("0x10") },
    ],
    { duration: 0x1f4 }
  );
}
function toggleFullScreen() {
  document["fullscreenElement"]
    ? document[_0x4216("0x29")]()
    : videoContainer[_0x4216("0xe")]();
}
function updateFullscreenButton() {
  fullscreenIcons[_0x4216("0x4b")]((_0xb88ab4) =>
    _0xb88ab4[_0x4216("0x35")][_0x4216("0x31")](_0x4216("0x39"))
  );
  if (document["fullscreenElement"]) {
  } else {
  }
}
async function togglePip() {
  try {
    video !== document[_0x4216("0x11")]
      ? ((pipButton[_0x4216("0x3c")] = !![]), await video[_0x4216("0xb")]())
      : await document[_0x4216("0x48")]();
  } catch (_0x4ff31b) {
    console[_0x4216("0x3a")](_0x4ff31b);
  } finally {
    pipButton[_0x4216("0x3c")] = ![];
  }
}
function hideControls() {
  if (video["paused"]) return;
  videoControls["classList"][_0x4216("0x20")](_0x4216("0x21"));
}
function showControls() {
  videoControls[_0x4216("0x35")]["remove"](_0x4216("0x21"));
}
function keyboardShortcuts(_0x28a5eb) {
  const { key: _0x53d5a7 } = _0x28a5eb;
  switch (_0x53d5a7) {
    case "k":
      togglePlay(), animatePlayback();
      video[_0x4216("0x1b")]
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
playButton[_0x4216("0x1e")](_0x4216("0x45"), togglePlay),
  video["addEventListener"](_0x4216("0x3e"), updatePlayButton),
  video[_0x4216("0x1e")](_0x4216("0x13"), updatePlayButton),
  video[_0x4216("0x1e")]("loadedmetadata", initializeVideo),
  video[_0x4216("0x1e")]("timeupdate", updateTimeElapsed),
  video[_0x4216("0x1e")](_0x4216("0x46"), updateProgress),
  video[_0x4216("0x1e")](_0x4216("0x1d"), updateVolumeIcon),
  video[_0x4216("0x1e")](_0x4216("0x45"), togglePlay),
  video["addEventListener"](_0x4216("0x44"), showControls),
  video[_0x4216("0x1e")]("mouseleave", hideControls),
  videoControls[_0x4216("0x1e")](_0x4216("0x44"), showControls),
  videoControls[_0x4216("0x1e")](_0x4216("0x28"), hideControls),
  volume[_0x4216("0x1e")](_0x4216("0x2c"), updateVolume),
  volumeButton[_0x4216("0x1e")](_0x4216("0x45"), toggleMute),
  fullscreenButton[_0x4216("0x1e")](_0x4216("0x45"), toggleFullScreen),
  videoContainer[_0x4216("0x1e")](_0x4216("0x18"), updateFullscreenButton),
  pipButton["addEventListener"](_0x4216("0x45"), togglePip),
  document[_0x4216("0x1e")](_0x4216("0x25"), () => {
    !(_0x4216("0x0") in document) &&
      pipButton[_0x4216("0x35")][_0x4216("0x20")](_0x4216("0x39"));
  }),
  document[_0x4216("0x1e")](_0x4216("0x2b"), keyboardShortcuts);
