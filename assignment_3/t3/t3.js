'use strict';

// function to get the operating system
function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  let osName = 'Unknown OS';

  if (userAgent.indexOf('Win') !== -1) {
    osName = 'Windows';
  } else if (userAgent.indexOf('Mac') !== -1) {
    osName = 'macOS';
  } else if (userAgent.indexOf('X11') !== -1) {
    osName = 'UNIX';
  } else if (userAgent.indexOf('Linux') !== -1) {
    osName = 'Linux';
  } else if (/Android/.test(userAgent)) {
    osName = 'Android';
  } else if (/iPhone|iPad|iPod/.test(userAgent)) {
    osName = 'iOS';
  }

  return osName;
}

// function to get the browser name and version
function getBrowserInfo() {
  const ua = navigator.userAgent;
  let name = 'Unknown';
  let version = 'Unknown';

  if (ua.indexOf('Firefox') > -1) {
    name = 'Firefox';
    version = ua.substring(ua.indexOf('Firefox') + 8);
  } else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) {
    name = 'Opera';
    version =
      ua.substring(ua.indexOf('Opera') + 6) ||
      ua.substring(ua.indexOf('OPR') + 4);
  } else if (ua.indexOf('Chrome') > -1) {
    name = 'Chrome';
    version = ua.substring(ua.indexOf('Chrome') + 7);
  } else if (ua.indexOf('Safari') > -1) {
    name = 'Safari';
    version = ua.substring(ua.indexOf('Version') + 8);
  } else if (ua.indexOf('MSIE') > -1) {
    name = 'Internet Explorer';
    version = ua.substring(ua.indexOf('MSIE') + 5);
  } else if (ua.indexOf('Trident') > -1) {
    name = 'Internet Explorer';
    version = ua.substring(ua.indexOf('rv:') + 3);
  }

  // Extracting major version if needed
  if (version.indexOf('.') > -1) {
    version = version.split('.')[0];
  }

  return {name, version};
}

document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.getElementById('target');

  // get the screen width and height
  const screenWidth = screen.width;
  const screenHeight = window.screen.height;

  // get the available space for the browser window
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // get the date
  const now = new Date();
  const dateFormatter = new Intl.DateTimeFormat('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedDate = dateFormatter.format(now);

  // get the time
  const timeFormatter = new Intl.DateTimeFormat('fi-FI', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // get the browser name and version
  const browserName = getBrowserInfo();
  const os = getOperatingSystem();

  /*
const formattedTime = timeFormatter.format(now);
console.log(formattedDate);
console.log(formattedTime);
console.log(getOperatingSystem());
console.log(navigator.userAgent);
console.log(screenWidth);
console.log(screenHeight);
console.log(viewportHeight);
console.log(viewportWidth);
*/

  const message = `<p> Browser name and version: ${browserName.name} ${
    browserName.version
  }</p>
  <p> Operating system: ${os}</p>
  <p> Screen width: ${screenWidth}</p>
  <p> Screen height: ${screenHeight}</p>
  <p> Viewport width: ${viewportWidth}</p>
  <p> Viewport height: ${viewportHeight}</p>
  <p> Date: ${formattedDate}</p>
  <p> Time: ${timeFormatter.format(now)}</p>
`;
  targetElement.innerHTML = message;
});
