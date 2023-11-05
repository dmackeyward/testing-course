import { cleanNumbers } from './util/numbers.js'

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateNumbers(numberInputs) {
  let result = ''

  try {
    const numbers = cleanNumbers(numberInputs);

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}