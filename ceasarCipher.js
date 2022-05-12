export { ceasarCipher };
let ceasarCipher = (str, shiftNum) =>
  shiftNum <= 0 || shiftNum > 25
    ? 'No negative Inputs'
    : str
        .split('')
        .map(char => {
          if (/^[a-z]+$/i.test(char))
            return char.charCodeAt(0) + shiftNum >= 123
              ? String.fromCharCode(char.charCodeAt(0) + shiftNum - 26)
              : String.fromCharCode(char.charCodeAt(0) + shiftNum);
          else return char;
        })
        .join('');
