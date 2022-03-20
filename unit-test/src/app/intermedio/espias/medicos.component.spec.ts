import { from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servico = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servico);
    });




    it('Init must load the doctors', () => {

        // spyOn hace peticiones falsas
        spyOn(servico, 'getMedicos').and.callFake(() => {
            return from(['medico 1', 'medico 2', 'medico 3']);
        })

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);

    });


    it('Do Must call the server for add a doctor', () => {

        const spia = spyOn(servico, 'agregarMedico').and.callFake(medico => {
            return from('');
        })

        componente.agregarMedico();

        expect(spia).toHaveBeenCalled();
    })


    it('Must add a new doctor to array of doctors', () => {

        const medico = { id: 1, nombre: 'Juan' };

        spyOn(servico, 'agregarMedico').and.returnValue(from([medico]));


        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    })


    it('If it fails the addition, the property mesajeError, must be greater than or equal to the error from service', () => {

        const miError = 'Nose pudo agregar el médico';

        spyOn(servico, 'agregarMedico').and
            .returnValue(throwError(() => miError));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    })


    it('Must call the server for delete a doctor', () => {

        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servico, 'borrarMedico')
            .and.returnValue(from(''));


        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    })



    it('Not must call the server for delete a doctor', () => {

        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servico, 'borrarMedico')
            .and.returnValue(from(''));


        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    })

});
