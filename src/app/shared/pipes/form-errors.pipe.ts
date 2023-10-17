import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(formInput: ValidationErrors|undefined|null, ...args: unknown[]): unknown {
    const messages: Array<string> = [];
    if (!formInput) return '';
    if('required' in formInput){
      messages.push('Campo requerido');
    }
    if('email' in formInput){
      messages.push('Escriba un email valido');
    }
    return messages.join('. ');
  }

}
