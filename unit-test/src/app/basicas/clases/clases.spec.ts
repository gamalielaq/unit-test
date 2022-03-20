import { Jugador } from './clases';

describe('Class test', ()=> {

    let jugador= new Jugador();


    //cliclo de vida de los test

    // beforeAll(); antes de todo
    // afterAll(); despues de todo, cuando todas las pruebas finalizan
    // beforeEach(); //se ejecuta antes de cada prueba(it)
    // afterEach();  //se ejecuta despues de cada prueba(it)

    beforeAll(() => {
        console.log('beforeAll()');

    })
    afterAll(() => {
        console.log('afterAll()');
        
    })
    beforeEach(() => {
        // jugador.hp = 100;
        jugador = new Jugador();
        
    })
    afterEach(() => {
        // jugador.hp = 100;
    })

    it('Should return 80 of hp, if receive 20 of danio ', ()=>{

        // const jugador= new Jugador();
        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);

    })

    it('Should return 50 of hp, if receive 50 of danio ', ()=>{

        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);

    })


    it('Should return 0 of hp, if receive 100 of danio ', ()=>{
        
        const resp = jugador.recibeDanio(100);

        expect(resp).toBe(0);

    })


    it('Should return 0 of hp, if receive 100 of danio or more ', ()=>{
        
        const resp = jugador.recibeDanio(101);

        expect(resp).toBe(0);

    })
})