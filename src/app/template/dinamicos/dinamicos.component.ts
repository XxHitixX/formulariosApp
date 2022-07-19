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

  nuevoJuego : string = '';

  persona : Persona = {
    nombre: 'Hildefonso',
    favorito: [
      {id: 1, nombre: "Death Note"},
      {id: 2, nombre: "Dragon Ball"},
    ]
  }

  agregar(){
    const nuevofavorito : Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favorito.push({...nuevofavorito})
    this.nuevoJuego = '';
  }
  guardar(){
    console.log("Formulario guardado")
  }

  eliminar(index : number){
    this.persona.favorito.splice(index, 1)
  }

}
