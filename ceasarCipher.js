export { testNumber };
let testNumber = (str, shiftNum) =>
  str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + shiftNum))
    .join('');
