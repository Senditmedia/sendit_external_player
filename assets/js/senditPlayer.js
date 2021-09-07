// var video = document.getElementById("senditVideo");
var videoError = document.getElementById("errorVideo");
var bufferStallErrors = 0;
var errorLoop = 0;
var somethingChanged = false;
//Set the video source
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const key = urlParams.get("key");
const vod = urlParams.get("vod");
if (vod == "" || vod == null) {
  var videoSrc = "https://cfv.sendit.media/hls/" + key + ".m3u8";
  var videoErrorSrc = "https://error.sendit.media/hls/error.m3u8";
} else {
  var videoSrc = "https://external.sendit.media/vod/" + key + "/playlist.m3u8";
  var videoErrorSrc = "https://error.sendit.media/hls/error.m3u8";
}

var liveOnline = true;
var errorCount = 0;
var stalledCount = 0;

//Create DOM element for monitoring liveOnline
var element2Monitor = document.createElement("input");
element2Monitor.type = "hidden";
element2Monitor.value = "online";
document.body.appendChild(element2Monitor);
var element2MonitorStartValue = "online";
var testing = false;
var hlsOrHtmlPlayer = null;

// if (testing) {
if (Hls.isSupported()) {
  hlsOrHtmlPlayer = true;
  //   Lets use the HLS.js library, otherwise fallback to plain HTML Video player
  var hls = new Hls({
    debug: false,
    enableWorker: true,
    startLevel: 3,
    autoLevelEnabled: true,
    // initialLiveManifestSize: 3,
    // liveBackBufferLength: 900,

    pLoader: function (config) {
      let loader = new Hls.DefaultConfig.loader(config);
      this.abort = () => loader.abort();
      this.destroy = () => loader.destroy();
      this.load = (context, config, callbacks) => {
        let { type, url } = context;
        loader.load(context, config, callbacks);
      };
    },
  });
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      video.play();
    });
  });

  //Handle errors
  hls.on(Hls.Events.ERROR, function (event, data) {
    var errorType = data.type;
    var errorDetails = data.details;
    var errorFatal = data.fatal;

    switch (data.details) {
      case Hls.ErrorDetails.FRAG_LOAD_ERROR:
        console.debug("Send it: Fragment ERROR DECTECT");
        break;
      default:
        break;
    }

    // console.log("Outside bufferStallErrors", bufferStallErrors);
    if (errorDetails == "bufferStalledError") {
      //   console.log("Inside bufferStallErrors", bufferStallErrors);
      // console.log("Inside errorLoop", errorLoop);
      if (errorLoop > 0) {
        // console.log("RESET TIME");
      } else {
        // console.log("Buffer error but first one in a row");
        errorLoop++;
      }
    }

    if (data.fatal) {
      switch (errorType) {
        case Hls.ErrorTypes.NETWORK_ERROR:
          // try to recover network error
          console.log("Send it: Network error, we trying to fix it");
          if (hls.url == videoSrc) {
            hls.detachMedia();
            hls.loadSource(videoErrorSrc);
            hls.attachMedia(video);
            video.play();
            video.loop = true;
            element2Monitor.value = "offline";
          }
          errorLoop = 0;
          break;
        case Hls.ErrorTypes.MEDIA_ERROR:
          console.log("Send it: Media error, we trying to fix it");
          hls.recoverMediaError();
          break;
        case Hls.ErrorTypes.OTHER_ERROR:
          console.log("Send it: Other error, we trying to fix it");
          hls.recoverMediaError();
          break;
        default:
          // cannot recover
          hls.destroy();
          break;
      }
    }
  });
  //Monitor the HTML dom element to know when to handle errors
  function track_change() {
    if (element2Monitor.value != element2MonitorStartValue) {
      element2MonitorStartValue = element2Monitor.value;
      somethingChanged = true;
      onlineMonitor();
    }
  }
  setInterval(function () {
    track_change();
  }, 100);
  //Launch this monitor on load, in case the page is loaded before live endpoint is up
  onlineMonitor();
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  hlsOrHtmlPlayer = false;
  video.src = videoSrc;
  video.setAttribute("onerror", "reloadOnError()");
  // video.addEventListener("loadedmetadata", function () {
  //   video.play();
  // });

  function reloadOnError() {
    if (errorCount == 0) {
      // Switch to the error video
      video.src = videoErrorSrc;
      video.muted = true;
      video.loop = true;
      video.load();
      video.play();
      errorCount == 1;
    }
  }
}

//Monitor the live endpoint and switch to it if it is available
function onlineMonitor() {
  if (hls.url == videoErrorSrc) {
    var http = new XMLHttpRequest();
    http.open("HEAD", videoSrc);
    http.onreadystatechange = function () {
      if (this.readyState == this.DONE) {
        if (this.status == 404 && hls.url == videoErrorSrc) {
          //Live down and user watching error video
          console.log("Send it: Live endpoint currently down", videoSrc);
        } else if (this.status == 200 && hls.url == videoErrorSrc) {
          console.log("Send it: Live endpoint is up, switching to it");
          element2Monitor.value = "online";
          somethingChanged = false;
          video.loop = false;
          hls.detachMedia();
          // hls.startLoad((startPosition = 1));
          hls.loadSource(videoSrc);
          hls.attachMedia(video);
          video.play();
        }
      }
    };
    http.send();
    setTimeout(onlineMonitor, 2000);
  }
}
//Monitor live video
onlineMonitorHLSNative();
//Monitor the live endpoint and switch to it if it is available
function onlineMonitorHLSNative() {
  // if (video.src == videoErrorSrc) {
  var http = new XMLHttpRequest();
  http.open("HEAD", videoSrc);
  http.onreadystatechange = function () {
    if (this.readyState == this.DONE) {
      if (this.status == 404 && video.src == videoSrc) {
        //Live down and user watching error video
        console.log("Send it: Live endpoint currently down", videoSrc);
        video.loop = true;
        video.src = videoErrorSrc;
        video.load();
        video.play();
      } else if (this.status == 200 && video.src == videoErrorSrc) {
        console.log("Send it: Live endpoint is up, switching to it");
        video.loop = false;
        video.src = videoSrc;
        video.load();
        video.play();
      }
    }
  };
  http.send();
  setTimeout(onlineMonitorHLSNative, 8000);
  // }
}

if (typeof hls === "undefined") {
  document.getElementById("quality").style.display = "none";
}


// Show / Hide the controls
let timeout = null
const videoControlsDiv = document.getElementById('video-controls')
document.addEventListener('mousemove', e => {
  shouldHide = false
  clearTimeout(timeout);
  if(videoControlsDiv.classList.contains('hidden-controls')){
    videoControlsDiv.classList.remove('hidden-controls')
  }
    timeout = setTimeout(function() {
        console.log('Mouse idle for 3 sec');
        shouldHide = true
        videoControlsDiv.classList.add('hidden-controls')
    }, 2000);
});
