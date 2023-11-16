import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrors implements PipeTransform {

  transform(formInput: ValidationErrors|undefined|null, ...args: unknown[]): unknown {
    const messages: Array<string> = [];
    if (!formInput) return '';
    if('required' in formInput){
      messages.push('Campo requerido');
    }
    if('email' in formInput){
      messages.push('Escriba un email valido');
    }
    if ('pattern' in formInput) {
      messages.push("La contraseña debe contener entre 9 y 15 caracteres, al menos una letra, un número y un punto");
    }
    return messages.join('. ');
  }

}
