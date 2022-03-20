import { message } from "./string"

// describe('Prueba de Strings');
// it('Deve de regresar un string');

describe('Pruebas de string', () => {
    
    it('Should return a string', () => {
        const resp = message('Fernando');
        expect(typeof resp).toBe('string');
    })

    it('Should return a greeting with the name sent', () => {
        const nombre = 'Juan';
        const resp = message(nombre);
        expect(resp).toContain(nombre);
    })

})