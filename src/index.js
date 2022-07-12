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
  // let exprArr10 = [];

  // for (let i = 0; i < expr.length; i = i + 10) {
  //   exprArr10.push(expr.slice(i, i + 10));
  // }

  // let decodedArr = [];

  // for(let item of exprArr10) {
  //   let morseCode = [];

  //   if (item === '**********') {
  //     morseCode.push(' ');
  //   }
  //   else {
  //     for (let i = 0; i < item.length; i = i + 2) {
  //       let str2 = item.slice(i, i + 2);

  //       if (str2 === '10') {
  //         morseCode.push('.');
  //       }
  //       else if (str2 === '11') {
  //         morseCode.push('-');
  //       }
  //     }
  //   }
  //   decodedArr.push(morseCode.join(''));
  // }

  // let result = '';
  // for (let item of decodedArr) {
  //   if (item === " ") {
  //     result += ' ';
  //   }
  //   else {
  //     result += MORSE_TABLE[item];
  //   }
  // }

  // return result;

let strMorse = ""
let OutPhrase = ""
let letter = ""

let arr10 = expr.match(/.{1,10}/g)
//(2) ['0000001011', '0010111110']
for (let i of arr10) {
  let arr2 = i.match(/.{1,2}/g)
  //(5) ['00', '00', '00', '10', '11']
  if (i === "**********"){
    OutPhrase = OutPhrase + " ";
    continue;
  }
  strMorse = "";
  letter = "";
  for (let k of arr2){
    if (k === "10") {
      strMorse = strMorse + ".";
    } else if (k === "11") {
      strMorse = strMorse + "-";
    }
  }
  letter = MORSE_TABLE[strMorse];
  OutPhrase = OutPhrase + letter;
}

return OutPhrase;

}

module.exports = {
    decode
}
