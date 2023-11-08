import { UsuarioInterface } from "./usuario.interface";

export class Profesor implements UsuarioInterface {
    //private password?: string="";
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public edad?: number | undefined,
    ){
    
        
    }

/*     public setPassword(password: string): void {

        this.password = password;
    } */
    
}
