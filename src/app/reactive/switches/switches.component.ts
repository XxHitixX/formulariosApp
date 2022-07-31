import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset(
      {...this.persona, terminos: true} )

      //opcion 1 sin rest
      // this.miFormulario.valueChanges.subscribe( formulario => {
      //   delete formulario.terminos;
      //   this.persona = formulario
      // })

      //opcion 2 con el rest y desestructuracion
      this.miFormulario.valueChanges.subscribe(({terminos, ...rest}) => {
        this.persona = rest
      })

  }

  miFormulario : FormGroup = this.fb.group({
    genero : ['M', Validators.required],
    notificaciones : [true, Validators.required],
    terminos : [false, Validators.requiredTrue]
  })

  persona =  {
    genero: 'F',
    notificaciones: false
  }

  guardar(){
    const formValue = { ...this.miFormulario.value }
    delete formValue.terminos;
    console.log(formValue)   
  }

  

}
