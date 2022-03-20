import { Jugador2 } from "./jugador2";


describe('Jugador 2 emit', ()=> {

    let Jugador:Jugador2;


    beforeEach( ()=> Jugador = new Jugador2) //antes de todo

    it('Must emit a event when you receive danio', ()=> {

        let nuevoHP = 0;

        Jugador.hpCambia.subscribe( hp=>{ 
            nuevoHP = hp;
        })

        Jugador.recibeDanio(1000);

        expect( nuevoHP ).toBe(0);
    })




    it('Must emit a event when you receive danio and survive if it is less than 100 ', ()=> {

        let nuevoHP = 0;

        Jugador.hpCambia.subscribe( hp=> nuevoHP = hp );

        Jugador.recibeDanio(50);

        expect( nuevoHP ).toBe(50);
    })

})