import { UsuarioInterface } from "./usuario.interface";

export class Usuario implements UsuarioInterface {
    constructor(  
        public nombre: string,
        public apellido: string,
        public correo: string,
        public edad: number,){
    } 
}