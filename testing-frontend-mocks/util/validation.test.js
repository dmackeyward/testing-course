import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation'

describe('validateNotEmpty()', () => {

    it('should throw an error if the string passed is empty', () => {

        //ARRANGE
        const message = "";

        //ACT
        const resultFn = () => {
            validateNotEmpty(message);
        };

        //ASSERT
        expect(resultFn).toThrow()

    })

    it('should throw an error if the string passed only contains whitespace', () => {

        //ARRANGE
        const message = "     ";

        //ACT
        const resultFn = () => {
            validateNotEmpty(message);
        };

        //ASSERT
        expect(resultFn).toThrow()

    })

    it('should throw an error with message "Error Message" if the string passed is empty', () => {

        //ARRANGE
        const message = "";
        const error = "Error Message"

        //ACT
        const resultFn = () => {
            validateNotEmpty(message, error);
        };

        //ASSERT
        expect(resultFn).toThrow(/Error Message/)
        expect(resultFn).toThrow(error)

    })

    it('should throw an error if the string passed is empty', () => {

        //ARRANGE
        const message = "";
        const error = "Error Message"

        //ACT
        const resultFn = () => {
            validateNotEmpty(message, error);
        };

        //ASSERT
        expect(resultFn).toThrow(/Error Message/)

    })

    it('should not throw an error if the string passed is not empty', () => {

        //ARRANGE
        const message = "Not Empty";
        const error = "Error Message"

        //ACT
        const resultFn = () => {
            validateNotEmpty(message, error);
        };

        //ASSERT
        expect(resultFn).not.toThrow()

    })
})