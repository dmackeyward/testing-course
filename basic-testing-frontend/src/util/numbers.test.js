import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers'


describe('transformToNumber()', () => {
    it('should convert the number from a string to an integer', () => {

        //ARRANGE - define the testing environment and values
        const input = "1"
    
        //ACT - run the actual code / function that should be tested
        const result = transformToNumber(input);
    
        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        //expect(result).not.toBeNaN();
    
        expect(result).toBeTypeOf('number')
    
    });
    
    it('should convert the number from a string to an integer', () => {
    
        //ARRANGE - define the testing environment and values
        const input = "1"
    
        //ACT - run the actual code / function that should be tested
        const result = transformToNumber(input);
    
        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        //expect(result).not.toBeNaN();
    
        expect(result).toBe(+input)
    
    });
    
    
    it('should yield NaN for non-transforamble values', () => {
    
        //ARRANGE - define the testing environment and values
        const input = "invalid"
        const input2 = {}
    
        //ACT - run the actual code / function that should be tested
        const result = transformToNumber(input);
        const result2 = transformToNumber(input2)
    
        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        //expect(result).not.toBeNaN();
        expect(result).toBeNaN()
        expect(result2).toBeNaN()
    
    });    
})



describe('cleanNumbers()', () => {

    it('should return an array of number values if an array of string number values is provided', () => {
        
        //ARRANGE
        const numberValues = ['1', '2'];

        //ACT
        const result = cleanNumbers(numberValues)

        //ASSERT
        expect(result[0]).toBeTypeOf('number')
        expect(result).toEqual([1, 2]) 
    })

    it('should throw an error if an array with at least one empty string is provided', () => {

        //ARRANGE
        const numberValues = ['', '2']

        //ACT
        const cleanFn = () => {cleanNumbers(numberValues)} 

        //ASSERT
        expect(cleanFn).toThrow();

    })
})