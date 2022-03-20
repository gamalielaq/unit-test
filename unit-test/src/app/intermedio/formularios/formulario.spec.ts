import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario";

describe('Forms', () => {

    let component: FormularioRegister;

    beforeEach(() => {
        component = new FormularioRegister(new FormBuilder);
    })

    it('Must create a form with two fields email and password', () => {
        expect(component.miForm.contains('email') ).toBeTruthy();
        expect(component.miForm.contains('password') ).toBeTruthy();
    })


    it('the email it is mandatory', () => {
        const control = component.miForm.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalsy();
    })

    it('the email must be a valid adrres', () => {
        const control = component.miForm.get('email');
        control?.setValue('gamaliel@gmail.com');
        expect(control?.valid).toBeTruthy();
    })

})