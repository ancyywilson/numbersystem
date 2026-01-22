const inputNumber = document.getElementById('inputNumber');
const inputSystem = document.getElementById('inputSystem');
const convertBtn = document.getElementById('convertBtn');

const binaryOutput = document.getElementById('binary');
const decimalOutput = document.getElementById('decimal');
const hexOutput = document.getElementById('hex');
const octalOutput = document.getElementById('octal');
const errorMsg = document.getElementById('error');

convertBtn.addEventListener('click', () => {
  const number = inputNumber.value.trim();
  const system = inputSystem.value;
  let decimal;

  errorMsg.textContent = '';
  binaryOutput.textContent = '';
  decimalOutput.textContent = '';
  hexOutput.textContent = '';
  octalOutput.textContent = '';

  if (!number) {
    errorMsg.textContent = 'Please enter a number!';
    return;
  }

  try {
    switch(system) {
      case 'binary':
        if (!/^[01]+$/.test(number)) throw 'Invalid binary number';
        decimal = parseInt(number, 2);
        break;
      case 'decimal':
        if (!/^\d+$/.test(number)) throw 'Invalid decimal number';
        decimal = parseInt(number, 10);
        break;
      case 'hex':
        if (!/^[0-9a-fA-F]+$/.test(number)) throw 'Invalid hexadecimal number';
        decimal = parseInt(number, 16);
        break;
      case 'octal':
        if (!/^[0-7]+$/.test(number)) throw 'Invalid octal number';
        decimal = parseInt(number, 8);
        break;
      default:
        throw 'Unknown system';
    }

    // Show results
    binaryOutput.textContent = decimal.toString(2);
    decimalOutput.textContent = decimal.toString(10);
    hexOutput.textContent = decimal.toString(16).toUpperCase();
    octalOutput.textContent = decimal.toString(8);

  } catch (err) {
    errorMsg.textContent = err;
  }
});
