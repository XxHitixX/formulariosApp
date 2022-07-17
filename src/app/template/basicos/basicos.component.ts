import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('datosForm') datosForm !: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido() : boolean {
    return this.datosForm?.controls["producto"]?.invalid &&
           this.datosForm?.controls["producto"]?.touched
  }

  precioValido() : boolean{
    return  this.datosForm?.controls["precio"]?.touched &&
            this.datosForm?.controls["precio"]?.value < 0
  }


  submit(){
    console.log("Posteo correcto")
    this.datosForm.resetForm({
      producto: 'RTX 1000',
      precio: 0,
      existencias: 10
    });
  }
}
