import { obtenerRobets } from "./arreglos";

describe('Array testing', () => {

    it('Should return at least three robots', () => {
            const res = obtenerRobets();

            expect( res.length ).toBeGreaterThanOrEqual(3); //mayor o igual a 3
    })


    it('must exist Megaban and Ultron', ()=> {
        const res = obtenerRobets(); 

        expect(  res ).toContain('Megaban');
        expect(  res ).toContain('Ultron');

    })

});