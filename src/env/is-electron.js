// based on https://github.com/cheton/is-electron
// https://github.com/electron/electron/issues/2288
/* global window, process, navigator */
export default function isElectron(mockUserAgent) {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' &&
    window.process.type === 'renderer') {
    return true;
  }
  // Main process
  if (typeof process !== 'undefined' && typeof process.versions === 'object' &&
    Boolean(process.versions.electron)) {
    return true;
  }
  // Detect the user agent when the `nodeIntegration` option is set to true
  const realUserAgent = typeof navigator === 'object' && typeof navigator.userAgent === 'string' &&
    navigator.userAgent;
  const userAgent = mockUserAgent || realUserAgent;
  if (userAgent && userAgent.indexOf('Electron') >= 0) {
    return true;
  }
  return false;
}
