import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should have a link to doctors page', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(e => e.attributes['routerLink'] === '/medicos');
    expect(index).toBeGreaterThanOrEqual(0);

    // let  exits;
    // for (const element of debugElements) {
    //   if (element.attributes['routerLink'] === '/medicos') {
    //     exits = true;
    //     break;
    //   }
    // }
    // expect(exits).toBeTruthy();
  })

});
