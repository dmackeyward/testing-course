import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors'

describe('HttpError()', () => {

    it('should create an instance of HttpError with a statusCode, message, and data', () => {

        //ARRANGE
        const statusCode = 404;
        const message = "Not found";
        const data = { details: "Resource not found." };

        //ACT
        const httpError = new HttpError(statusCode, message, data)

        //ASSERT
        expect(httpError).toBeInstanceOf(HttpError)
        expect(httpError.statusCode).toBe(statusCode)
        expect(httpError.message).toBe(message)
        expect(httpError.data).toBe(data)
    })


    it('should create an instance of HttpError with a statusCode, message, and default values for data', () => {

        //ARRANGE
        const statusCode = 404;
        const message = "Not found";


        //ACT
        const httpError = new HttpError(statusCode, message)

        //ASSERT
        expect(httpError.statusCode).toBe(statusCode)
        expect(httpError.message).toBe(message)
        expect(httpError.data).toBeUndefined()
    })


    it('should create an instance of HttpError with default values for statusCode, message and data', () => {

        //ARRANGE

        //ACT
        const httpError = new HttpError()

        //ASSERT
        expect(httpError.statusCode).toBeUndefined()
        expect(httpError.message).toBeUndefined()
        expect(httpError.data).toBeUndefined()
    })


})


describe('ValidationError()', () => {

    it('should create an instance of ValidationError with correct properties', () => {

        //ARRANGE
        const message = "Validation Error"

        //ACT
        const validationError = new ValidationError(message)

        //ASSERT
        expect(validationError).toBeInstanceOf(ValidationError)
        expect(validationError.message).toBe(message)

    })

})



