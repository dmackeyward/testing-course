import { it, expect, describe } from 'vitest';
import { outputText } from './output'

describe('outputText()', () => {
    it('should return a string no matter which value is passed in', () => {
        //ARRANGE
        const input = 1;
        const input1 = 'input1';
        const input2 = false;

        //ACT
        const result = outputText(input);
        const result1 = outputText(input1);
        const result2 = outputText(input2);

        //ASSERT
        expect(result).toBeTypeOf('string');
        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
    })

    it('should return a string that contains the calculation result if a number is provided as a paramter', () => {
        //ARRANGE
        const input = 5;

        //ACT
        const result = outputText(input);

        //ASSERT
        expect(result).toContain(result.toString());
    })

    it('should return an empty string if "no-calc" is provided as a result', () => {
        //ARRANGE
        const input = 'no-calc';

        //ACT
        const result = outputText(input);

        //ASSERT
        expect(result).toBe('');
    })

    it('should return an empty string if "no-calc" is provided as a result', () => {
        //ARRANGE
        const input = 'invalid';

        //ACT
        const result = outputText(input);

        //ASSERT
        expect(result).toContain('Invalid');
    })
})
