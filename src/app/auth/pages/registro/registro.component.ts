import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  get evaluarErrorEmail() : string{
    
    const errors = this.miFormulario.get('email')?.errors
    
    if(errors?.['required']){
      return 'Email es obligatorio'
    } else if(errors?.['pattern']){
      return 'El valor ingresado no tiene formato de correo'
    }else if(errors?.['emailRepetido']){
      return 'El email ya esta registrado'
    }

    return ''
  }

  miFormulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.nopuedeserStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  constructor(private fb : FormBuilder,
              private validatorService : ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Hildefonso Tirado',
      email: 'test1@test.com',
      username: 'ponchitoT',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo : string){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }
 
  //Manera practica no inteligente de hacer que se muestren varios mensajes de un mismo campo
  /*
  correoVacio(){
    return this.miFormulario.get('email')?.errors?.['required']
            && this.miFormulario.get('email')?.touched;
  }
  correoNoValido(){
    return this.miFormulario.get('email')?.hasError('pattern')
            && this.miFormulario.get('email')?.touched;
  }
  correoRepetido(){
    return this.miFormulario.get('email')?.hasError('emailRepetido')
    && this.miFormulario.get('email')?.touched;
  }

  */

  enviarFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }
}
