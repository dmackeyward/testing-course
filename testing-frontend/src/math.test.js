import { it, expect } from 'vitest';
import { add } from './math'

it('should summarize all number values in an array', () => {

    //ARRANGE - define the testing environment and values
    const inputs = [1, 2, 3];

    //ACT - run the actual code / function that should be tested
    const result = add(inputs);

    //ASSERT - evaluate the produced value / result and compare it to the expected value / result
    const expectedResult = inputs.reduce((total, item) => { return total + item }, 0);

    expect(result).toBe(expectedResult);


});

it('should yield NaN if at least one invalid number is provided', () => {

    //ARRANGE - define the testing environment and values
    const inputs = ['invalid', 1]

    //ACT - run the actual code / function that should be tested
    const result = add(inputs);

    //ASSERT - evaluate the produced value / result and compare it to the expected value / result
    expect(result).toBeNaN();

});

it('should yield a correct sum if an array of numeric string values is provided', () => {

    //ARRANGE - define the testing environment and values
    const inputs = ['1', '2'];

    //ACT - run the actual code / function that should be tested
    const result = add(inputs);

    //ASSERT - evaluate the produced value / result and compare it to the expected value / result
    const expectedResult = inputs.reduce((total, item) => { return +total + +item }, 0);

    expect(result).toBe(expectedResult)

})

it('should yield 0 if an empty array is provided', () => {

    //ARRANGE - define the testing environment and values
    const inputs = [];

    //ACT - run the actual code / function that should be tested
    const result = add(inputs);

    //ASSERT - evaluate the produced value / result and compare it to the expected value / result
    expect(result).toBe(result)
})

it('should throw an error if no value is passed into the function', () => {

    //ARRANGE - define the testing environment and values

    //ACT - run the actual code / function that should be tested
    const resultFn = () => {
        add();
    };

    //ASSERT - evaluate the produced value / result and compare it to the expected value / result
    expect(resultFn).toThrow(/is not iterable/);
})

it('should throw an error if provided with multiple arguments instead of an array', () => {

    //ARRANGE - define the testing environment and values
    const num1 = 1;
    const num2 = 2;

    //ACT - run the actual code / function that should be tested
    const resultFn = () => {
        add(num1, num2);
    };

    //ASSERT - evaluate the produced value / result and compare it to the expected value / result
    expect(resultFn).toThrow(/is not iterable/);
})

