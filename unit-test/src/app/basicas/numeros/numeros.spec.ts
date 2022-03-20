import { incrementar } from "./numeros"

describe('Numbers tests', () => {
    it('Should return 100, if the number entered is greater than 100 ', () => {
        const res = incrementar(300);

        expect( res ).toBe(100);
    })


    it('Should return the number entered + 1, if it is not greater than 100', () => {
        const res = incrementar(50);

        expect( res ).toBe(51); // result expect of the test
    })
})