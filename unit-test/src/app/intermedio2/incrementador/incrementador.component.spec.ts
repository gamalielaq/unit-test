import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('must show the legend', () => {
        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); //Disparar la detección de cambios

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');
    });


    it('Must show at the input the value of the progress', waitForAsync(() => {
        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const elem: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(elem.value).toBe('55');
        })
    }))


    it('Must increase/decrease by 5, with a click on the botton ', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    })

    it('In the component title must show the progress', ()=> {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('45');

    })
});
