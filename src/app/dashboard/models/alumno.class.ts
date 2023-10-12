import { Curso } from "./curso.class";
import { Usuario } from "./usuario.class";

export class AlumnoClass extends Usuario {
    constructor(
        public id: number,
        nombre: string,
        apellido: string,
        correo: string,
        edad: number,
        public curso: Array<Curso>, 
        public notas: Array<number>,
        ){
            super( nombre, apellido, correo, edad);
        }
}
