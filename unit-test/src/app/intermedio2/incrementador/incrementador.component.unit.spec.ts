import { IncrementadorComponent } from './incrementador.component';


describe('Incrementador Component Unit', () => {

    let componente: IncrementadorComponent;
    beforeEach( ()=> componente = new IncrementadorComponent );


    it('Should not exceed 100 the progress', ()=> {
        componente.progreso = 50;
        componente.cambiarValor( 5 );

        expect(componente.progreso).toBe(55);
    })


})