import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.parent.params.subscribe(params =>{
      console.log("Ruta Hija Usuario Nuevo");
      console.log(params);
    })
  }

  ngOnInit() {
  }

}
