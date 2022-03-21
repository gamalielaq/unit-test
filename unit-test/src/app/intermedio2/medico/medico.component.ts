import { Intermedio2Service } from './intermedio2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html'
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];
  constructor(
    private _intermedio2Service: Intermedio2Service
  ) { }

  ngOnInit(): void {
  }


  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this._intermedio2Service.getMedicos().subscribe((medicos:any) => {
      this.medicos = medicos;
    })
  }
}
