export class Curso {
    constructor(
        public id: number,
        public nombre: string,
        public estado: EstadoCurso   
    ){}
}

export enum EstadoCurso{
    caso1= "activo",
    caso2= "inactivo"
}
