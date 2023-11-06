import { it, expect, describe } from 'vitest';
import { outputText } from './output'


describe('outputText()', () => {
    it('should return a string, no matter which value is passed in', () => {
      const val1 = 1;
      const val2 = 'invalid';
      const val3 = false;
  
      const result1 = outputText(val1);
      const result2 = outputText(val2);
      const result3 = outputText(val3);
  
      expect(result1).toBeTypeOf('string');
      expect(result2).toBeTypeOf('string');
      expect(result3).toBeTypeOf('string');
    });
  
    it('should return a string that contains the calculation result if a number is provided as a result', () => {
      const result = 5;
  
      const resultText = outputText(result);
  
      expect(resultText).toContain(result.toString());
    });
  
    it('should return an empty string if "no-calc" is provided as a result', () => {
      const result = 'no-calc';
  
      const resultText = outputText(result);
  
      expect(resultText).toBe('');
    });
  
    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
      const result = 'invalid';
  
      const resultText = outputText(result);
  
      expect(resultText).toContain('Invalid');
    });
  });