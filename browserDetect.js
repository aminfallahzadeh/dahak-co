let userAgent = navigator.userAgent;
let browserName;

if (RegExp(/chrome|chromium|crios/i).exec(userAgent)) {
  browserName = "chrome";
} else if (RegExp(/firefox|fxios/i).exec(userAgent)) {
  browserName = "firefox";
} else if (RegExp(/safari/i).exec(userAgent)) {
  browserName = "safari";
} else if (RegExp(/opr/ / i).exec(userAgent)) {
  browserName = "opera";
} else if (RegExp(/edg/i).exec(userAgent)) {
  browserName = "edge";
} else {
  browserName = "No browser detection";
}

if (browserName !== "safari") {
  const bgVid = document.querySelector(".bg-video");

  window.onload = function () {
    console.log("loaded");
    bgVid.innerHTML =
      '<object type="text/html" data="video.html" class="bg-video__content"></object>';
  };
}
