import { it, describe, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';
import { User } from './hooks';

//global value
const testEmail = 'test@test.com';
let user;

//will execute once before any tests
beforeAll(() => {
  //might be useful if i have a global variable with different values in a different suite or file
  user = new User(testEmail);
  console.log('beforeAll()')
})

//useful for resetting global test variables before each test is run
beforeEach(() => {
  user = new User(testEmail)
  console.log('beforeEach()')
});

//useful for resetting global test variables after each test is run
afterEach(() => {
  //user = new User(testEmail)
  console.log('afterEach()')
})

//will execute after all tests in the file are run
afterAll(() => {
  console.log('afterAll()')
})


//using keyword concurrent to run all your tests simutaneoiusly (to speed up testing time)
//note - by default different testing files are run simutaneously
//note2 - concurrent can cause issues if multiple test files are manipulating global state variables
it.concurrent('should update the email', () => {

  const newTestEmail = 'test2@test.com';
  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);

});

describe.concurrent('test suite 1', () => {

  beforeEach(() => {
    console.log('beforeEach() hook used inside a test suite')
  });

  it('should have an email property', () => {

    expect(user).toHaveProperty('email');
  
  });
  
  it('should store the provided email value', () => {
  
    expect(user.email).toBe(testEmail);
  
  });

})


describe('test suite 2', () => {

  it('should clear the email', () => {

    user.clearEmail();
    expect(user.email).toBe('');
  
  });
  
  it('should still have an email property after clearing the email', () => {
  
    user.clearEmail();
    expect(user).toHaveProperty('email');
  
  });

})


