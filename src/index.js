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
  //Divide expression by 10 symbols
  for (let j = 0; j < expr.length; j = j + 10) {
    //exprArray has one element with 10 symbols
    exprArray = expr.slice(j,j+10);
    //Decode numbers to dots and dashes
    for (let i = 0; i < exprArray.length; i=i+2) {
      console.log(exprArray[i]);
      if (exprArray[i] == '1' && exprArray[i+1] == '0') {
         morseArray.push('.');
      } else if (exprArray[i] == '1' && exprArray[i+1] == '1') {
         morseArray.push('-');
      } else if (exprArray[i] == '*') {
        morseArray.push(' ');
        i += 9;
      }
    }
    //Division of words
    morseArray.push('/');
  }
  //Make an array of words
  morseArray = morseArray.join('').split('/');
  //Delete odd last empty element
  morseArray.splice(morseArray.length-1, 1);
  let resultString = '';
  //Decode from morse to letters
  morseArray.forEach(item => {
    //Decode spaces
    if (item == ' ') {
      resultString += item;
    }
    //Decode other symbols
    for (let key of Object.keys(MORSE_TABLE)) {
      if (item == key) {
        resultString += MORSE_TABLE[key];
      }
    }
  });
  //Return result
  return resultString;
}

module.exports = {
    decode
}
