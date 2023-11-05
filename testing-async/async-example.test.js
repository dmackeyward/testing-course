import { it, expect, done } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {

    //ARRANGE
    const testEmail = 'test@test.com'

    //ACT + ASSESS
    generateToken(testEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            done();
        } catch (err) {
            done(err);
        }
    });

})

it('should generate a token value', () => {
    //ARRANGE
    const testEmail = 'test@test.com'

    //ACT + ASSESS
    return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
})


it('should generate a token value (async test function)', async () => {
    //ARRANGE
    const testEmail = 'test@test.com'

    //ACT
    const token = await generateTokenPromise(testEmail)

    //ASSESS
    expect(token).toBeDefined();

})