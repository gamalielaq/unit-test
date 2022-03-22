import { MedicoComponent } from './../../intermedio2/medico/medico.component';
import { RUTAS } from './app.routs';

describe('Main Routs', ()=> {

    it('Must exist the rout /medico/:id', () => {
        expect( RUTAS ).toContain(
            {path:'medico/:id', component: MedicoComponent }
        );
    })

})