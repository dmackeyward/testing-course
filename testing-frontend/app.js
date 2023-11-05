import { getFormData } from './src/parser.js';
import { calculateNumbers } from './src/math.js';
import { outputText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {

  event.preventDefault();
  const numberInputs = getFormData(form);
  const result = calculateNumbers(numberInputs)
  const resultText = outputText(result);
  outputResult(resultText);

}

form.addEventListener('submit', formSubmitHandler);
