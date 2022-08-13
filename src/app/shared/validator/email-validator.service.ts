import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})//Implemento la interface AsyncValidator que me permite determinar el servicio como una validacion asincrona
export class EmailValidatorService implements AsyncValidator {

  constructor(private http : HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value
    console.log(email)
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
            .pipe(
              delay(3000),
              map( respuesta => {
                return (respuesta.length === 0) 
                        ? null
                        : { emailRepetido: true }
              })
            )
    
  }
}
