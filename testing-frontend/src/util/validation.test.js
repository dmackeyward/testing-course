import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation'


describe('validateStringNotEmpty()', () => {

    //ValidateStringNotEmpty
    it('should throw an error, if an empty string is provided', () => {
        const input = '';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).toThrow();
    });


    it("should throw an error message 'must not be empty' if a string is empty", () => {

        //ARRANGE - define the testing environment and values
        const input = ""

        //ACT - run the actual code / function that should be tested
        const resultFn = () => {
            validateStringNotEmpty(input);
        }

        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        expect(resultFn).toThrow(/must not be empty/)

    });


    it('should pass the test if the string is not empty', () => {

        //ARRANGE - define the testing environment and values
        const input = "not empty"

        //ACT - run the actual code / function that should be tested
        const resultFn = () => {
            validateStringNotEmpty(input);
        }

        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        expect(resultFn).toBeTruthy();
        expect(resultFn).not.toThrow();

    });

    //Max's test
    it('should throw an error if any other value than a string is provided', () => {
        const inputNum = 1;
        const inputBool = true;
        const inputObj = {};

        const validationFnNum = () => validateStringNotEmpty(inputNum);
        const validationFnBool = () => validateStringNotEmpty(inputBool);
        const validationFnObj = () => validateStringNotEmpty(inputObj);

        expect(validationFnNum).toThrow();
        expect(validationFnBool).toThrow();
        expect(validationFnObj).toThrow();
    });

})








describe('validateNumber()', () => {
    //ValidateNumber
    it('should throw an error if NaN is provided', () => {
        const input = NaN;
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    });


    it('should throw an error if the input is not a number', () => {

        //ARRANGE - define the testing environment and values
        const input = "not a number"

        //ACT - run the actual code / function that should be tested
        const resultFn = () => {
            validateNumber(input);
        }

        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        expect(resultFn).toThrow()

    });

    it('should throw an error with a message if the input is not a number', () => {

        //ARRANGE - define the testing environment and values
        const input = "not a number"

        //ACT - run the actual code / function that should be tested
        const resultFn = () => {
            validateNumber(input);
        }

        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        expect(resultFn).toThrow(/Invalid number/)

    });


    it('should throw an error if the input is not a NUMERICAL number', () => {

        //ARRANGE - define the testing environment and values
        const input = "1"

        //ACT - run the actual code / function that should be tested
        const resultFn = () => {
            validateNumber(input);
        }

        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        expect(resultFn).toThrow(/Invalid number/)

    });


    it('should pass the test if the number is valid', () => {

        //ARRANGE - define the testing environment and values
        const input = 1;

        //ACT - run the actual code / function that should be tested
        const resultFn = () => {
            validateNumber(input);
        }

        //ASSERT - evaluate the produced value / result and compare it to the expected value / result
        expect(resultFn).toBeTruthy();
        expect(resultFn).not.toThrow();

    });
})






