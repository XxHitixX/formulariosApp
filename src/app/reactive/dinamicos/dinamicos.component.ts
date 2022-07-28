import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  get favoritoArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  miFormulario : FormGroup = this.fb.group({
    nombre: ['', [Validators.minLength(3), Validators.required]],
    favoritos: this.fb.array([
      ['Metal gear', Validators.required],
      ['Metal slug',  Validators.required]
    ], [Validators.required])
  })

  nuevoFavorito : FormControl = this.fb.control('', Validators.required)

  esValido( campo : string) {
    return this.miFormulario.controls[campo].errors 
        && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if(this.miFormulario.invalid){
      return;
    }
    //opt1
    this.favoritoArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    //opt2
    // this.favoritoArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset();
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
  }

  borrar(i : number){
    this.favoritoArr.removeAt(i)
  }

}
