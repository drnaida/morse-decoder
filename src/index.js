const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let exprArray = [];
  let morseArray = [];
  for (let j = 0; j < expr.length; j = j + 10) {
    exprArray.push(expr.slice(j,j+10));
  }
  console.log(exprArray);
  for (let i = 0; i < expr.length; i=i+2) {
    if (expr[i] == '1' && expr[i+1] == '0') {
       morseArray.push('.');
    }
    if (expr[i] == '1' && expr[i+1] == '1') {
       morseArray.push('-');
    }
  }
  let morseString = morseArray.join('');
  return morseString;
}

module.exports = {
    decode
}
