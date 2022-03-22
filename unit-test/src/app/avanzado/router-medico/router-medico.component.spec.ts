import { Router, ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterMedicoComponent } from './router-medico.component';
import { from, Observable, of, Subject } from 'rxjs';

class FakeRouter {
  navigate(params) {}
}
class FakeActivatedRoute {
  // params: Observable<any> = of(null);
  params: Observable<any> = from([{id: 'nuevo'}]);


  // private subject = new Subject();

  // push(  valor ) {
  //   this.subject.next(valor);
  // }

  // get params() {
  //   return this.subject.asObservable();
  // }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should redirect to doctor when it is saved', () => {
      const router = TestBed.inject(Router);
      const spy = spyOn( router, 'navigate' );
      component.guardarMedico();
      expect(spy).toHaveBeenCalledOnceWith(['medico', '123']);
  }); 

  it('Must put the id = nuevo', () => {
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    // activatedRoute.push({id: 'nuevo'});
    expect(component.id).toBe('nuevo');

  })
});
