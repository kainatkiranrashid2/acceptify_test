export function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );

  // More robust Safari detection
  const isSafari =
    ua.indexOf("safari") !== -1 &&
    ua.indexOf("chrome") === -1 &&
    ua.indexOf("chromium") === -1 &&
    ua.indexOf("edg") === -1 && // Edge
    ua.indexOf("opr") === -1; // Opera

  // For debugging
  console.log({
    userAgent: ua,
    isSafari,
    hasMediaCapabilities,
    isChrome: ua.indexOf("chrome") !== -1,
    isEdge: ua.indexOf("edg") !== -1,
    isOpera: ua.indexOf("opr") !== -1,
  });

  return isSafari && hasMediaCapabilities;
}
