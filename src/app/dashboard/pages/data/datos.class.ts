import { Alumno } from "../../models/alumno.class";
import { Curso, EstadoCurso } from "../../models/curso.class";
export class datos {
  static getCursos(): Array<Curso>{
    return [{
        id:1,
        nombre: "Simulación de Vuelos",
        estado: EstadoCurso.caso1,
        startDate: new Date("12/10/2023"),
        endDate: new Date("11/24/2023") 
      },
      {
        id:2,
        nombre: "Manejo de Sistemas de Propulsion",
        estado: EstadoCurso.caso1,
        startDate: new Date("12/10/2023"),
        endDate: new Date("11/24/2023")
      },
      {
        id:3,
        nombre: "Metodología Espacial",
        estado: EstadoCurso.caso1,
        startDate: new Date("12/10/2023"),
        endDate: new Date("11/24/2023")
      },
      {
        id:4,
        nombre: "Proyectos Espaciales",
        estado: EstadoCurso.caso1,
        startDate: new Date("12/10/2023"),
        endDate: new Date("11/24/2023")
      },
      {
        id:5,
        nombre: "Armamento Espacial",
        estado: EstadoCurso.caso1,
        startDate: new Date("12/10/2023"),
        endDate: new Date("11/24/2023")
      },
      ];
  };

  static getAlumnos(): Array<Alumno>{
    return [
      {
        id:1,
        nombre: "Diego",
        apellido: "Patarroyo",
        correo: "diego@email.com",
        edad:22
      },
      {
        id:2,
        nombre: "Fabian",
        apellido: "Guevara",
        correo: "fgue.33@email.com",
        edad:36
      },
      {
        id:3,
        nombre: "Luis",
        apellido: "Escobar",
        correo: "lucho@email.com",
        edad:36
      },
      
    ]
  }

}


  

