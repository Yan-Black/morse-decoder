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
    let arr = [],
        mes = []

    for(let i = 1; i <= expr.length; i++){
        if(i % 10 == 0) arr.push(expr.slice(i-10,i))
    }

        arr = arr.map(el => el.startsWith('0') || el.startsWith('1') ? el = el.slice(el.indexOf('1'))
                                                                              .replace(/11/g,'-')
                                                                              .replace(/10/g,'.') : el)
                 .forEach(el => mes.push(MORSE_TABLE[el]))
  
  return mes.map(el => !el ? el = ' ' : el).join('')
}

module.exports = {
    decode
}