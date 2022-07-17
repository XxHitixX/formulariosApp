import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favorito: Favorito[]
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  persona : Persona = {
    nombre: 'Hildefonso',
    favorito: [
      {id: 1, nombre: "Death Note"},
      {id: 2, nombre: "Dragon Ball"},
    ]
  }

  guardar(){
    console.log("Formulario guardado")
  }

}
