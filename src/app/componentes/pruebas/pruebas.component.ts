import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  form = new FormGroup({});
  model ={email: 'oscarizquierd224@gmail.com', direccion: 'Calle santa Ana', portal: 13};
  
  fields: FormlyFieldConfig[] =  [
    {
      key: 'nombre',
      type: 'input',
      templateOptions: {
        label: 'Nombre',
        placeholder: 'Introduce nombre'
      }
    },

    {
      key: 'apellidos',
      type: 'input',
      templateOptions:{
        label:' Apellidos',
        placeholder: 'Introduzca apellidos'
      }
    },

    {
      key: 'type',
      type:'checkbox',
      templateOptions:{
        label:'Mayor de edad',
        value: true
      }
    },

    {
      key: 'pais',
      type: 'input',
      templateOptions: {
        label:'Nacionalidad',
        placeholder:'Inroduce tu nacionalidad',
        
      }
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(dato: any){
    console.log("Impresión de datos de formulario");
    console.log(dato);
  }

}
