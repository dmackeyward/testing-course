import { it, expect, vi } from 'vitest'
import { sendDataRequest } from './http'
import { HttpError } from './errors';

//creating a dummy response data
const testResponseData = {testKey: 'testData'}

//passing in a function implementation to the mock function
//i.e. when fetch is called, instead of doing the standard fetch, do this instead

//url - 'https://dummy-site.dev/posts'
//options - header data
const testFetch = vi.fn((url, options) => {

    //fetch returns a Promise
    return new Promise((resolve, reject) => {

        //checking to ensure the data was transformed to string/json
        if (typeof options.body !== 'string') {
            return reject('Not a string')
        }

        //fetch returns a status code and json data
        const testResponse = {
            //response.ok
            ok: true,
            //json function also returns a Promise why we have a nested Promise
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                })
            }
        }
        resolve(testResponse);
    })
});

//mocking a global object or function, passing the name of the function, and a replacement
vi.stubGlobal('fetch', testFetch);

it('should return any available response data', () => {

    const testData = {key: 'test'};
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);

})

it('should convert the provided data to json before sending the request', async () => {

    const testData = {key: 'test'};
    let errorMessage;

    try {
        await sendDataRequest(testData);
    } catch (error) {
        errorMessage = error;
    }

    expect(errorMessage).not.toBe('Not a string')

})

it('should throw an HttpError in case of non-ok responses', () => {

    testFetch.mockImplementationOnce((url, options) => {

        //fetch returns a Promise
        return new Promise((resolve, reject) => {
    
            //fetch returns a status code and json data
            const testResponse = {
                //response.ok
                ok: false,
                //json function also returns a Promise why we have a nested Promise
                json() {
                    return new Promise((resolve, reject) => {
                        resolve(testResponseData);
                    })
                }
            }
            resolve(testResponse);
        })
    });

    const testData = {key: 'test'};
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);

})