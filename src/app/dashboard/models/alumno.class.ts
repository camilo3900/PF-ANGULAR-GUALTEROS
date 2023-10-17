import { Curso } from "./curso.class";
import { Usuario } from "./usuario.class";

export class Alumno extends Usuario {
    constructor(
        id: number,
        nombre: string,
        apellido: string,
        correo: string,
        edad?: number,
        public curso?: Array<Curso>, 
        public notas?: Array<number>,
        ){
            super( id, nombre, apellido, correo, edad);
        }
}
