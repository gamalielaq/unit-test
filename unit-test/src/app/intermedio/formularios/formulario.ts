
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormularioRegister {

    miForm: FormGroup;

    constructor(fb: FormBuilder) {

        this.miForm = fb.group({
            email:['', [Validators.required, Validators.email]],
            password:['', Validators.required]
        })

    }

}