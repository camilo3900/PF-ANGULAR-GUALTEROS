export class Curso {
    constructor(
        public id: number,
        public nombre: string,
        public estado: EstadoCurso,
        public startDate: Date,
        public endDate: Date   
    ){}
}

export enum EstadoCurso{
    caso1= "activo",
    caso2= "inactivo"
}
