import { it, expect, vi } from 'vitest'
import { sendDataRequest } from './http'

//creating a dummy response data
const testResponseData = {testKey: 'testData'}

//passing in a function implementation to the mock function
//i.e. when fetch is called, instead of doing the standard fetch, do this instead

//url - 'https://dummy-site.dev/posts'
//options - header data
const testFetch = vi.fn((url, options) => {

    //fetch returns a Promise
    return new Promise((resolve, reject) => {
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