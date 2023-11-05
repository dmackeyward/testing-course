import { it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');

it('should execute the writeFile method', () => {

    const testData = 'Test';
    const testFilename = 'test.txt';


    //previous test before mock introduced -> it actually calls 
    //the writeData function and creates a test.txt file which 
    //passes the test but may affect the production code
    //e.g. if we are testing a database call we dont actually want to write to the DB
    //return expect(writeData(testData, testFilename)).resolves.toBeUndefined();


    //with mock it creates a spy function for ALL built in 
    //functions in fs, or other internal or external modules
    //so we can make sure the function is called without actually calling it


    //here we are calling our own function (writeData)
    writeData(testData, testFilename)


    //and inside writeData is a built in function fs.writeFile
    //so here we are checking that this function was called
    expect(fs.writeFile).toHaveBeenCalled();

})