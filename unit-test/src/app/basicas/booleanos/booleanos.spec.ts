import { usuarioLogueado } from "./booleanos"


describe('Boleans tests', ()=> {
    it('Should return true', ()=> {
        const resp = usuarioLogueado();

        expect( resp ).toBeTruthy();  //Evalua si regresa true

        // expect( resp ).toBeFalsy(); //Evalua si regresa false
    })
})