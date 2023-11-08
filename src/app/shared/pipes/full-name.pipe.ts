import { Pipe, PipeTransform } from '@angular/core';
import { Profesor } from 'src/app/dashboard/models/profesor.class';
import { Usuario } from 'src/app/dashboard/models/usuario.class';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Usuario|Profesor, ...args: unknown[]): unknown {
    const firstArg = args[0];
    const result = `${value.nombre} ${value.apellido}`;

    switch (firstArg) {
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();

      default:
        return result;
  }

  }

}
