export function getHostName() {
  const allowURLDemo = [''];
  return location.hostname === 'localhost' ||
    allowURLDemo.includes(location.hostname)
    ? ''
    : location.hostname;
}
