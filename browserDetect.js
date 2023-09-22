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
    bgVid.innerHTML =
      '<video autoplay muted playsinline loop class="bg-video__content"> <source src="img/map1.webm" type="video/webm"><source src="img/map1.mp4" type="video/mp4">Your browser is not supported</video>';
  };
}
