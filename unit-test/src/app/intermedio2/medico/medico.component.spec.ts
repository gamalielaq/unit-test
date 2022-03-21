import { MedicosService } from './../../intermedio/espias/medicos.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { HttpClientModule } from '@angular/common/http';


describe('Medico Component', () => {

    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicosService],
            imports:[HttpClientModule]
        })

        fixture = TestBed.createComponent(MedicoComponent);
        componente = fixture.componentInstance;
    })

    it('must create the component', () => {
        expect(componente).toBeTruthy();
    })

    it('must return the name of the doctor', () => {
        const name = 'Juan';
        const message = componente.saludarMedico(name);

        expect(message).toContain(name);
    })


})