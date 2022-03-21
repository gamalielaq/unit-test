import { MedicosService } from './../../intermedio/espias/medicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];
  constructor(
    private _medicoService: MedicosService
  ) { }

  ngOnInit(): void {
  }


  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this._medicoService.getMedicos().subscribe(medicos => {
      this.medicos = medicos;
    })
  }
}
