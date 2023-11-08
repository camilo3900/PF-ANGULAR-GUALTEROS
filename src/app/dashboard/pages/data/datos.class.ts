import { Curso, EstadoCurso } from "../../models/curso.class";
import { Profesor } from "../../models/profesor.class";
import { Usuario } from "../../models/usuario.class";
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
        estado: EstadoCurso.caso2,
        startDate: new Date("12/10/2023"),
        endDate: new Date("11/24/2023")
      },
      {
        id:3,
        nombre: "Metodología Espacial",
        estado: EstadoCurso.caso1,
        startDate: new Date("11/25/2023"),
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

  static getAlumnos(): Array<Usuario>{
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
      {
        id:4,
        nombre: "Manuel",
        apellido: "Ortiz",
        correo: "manuel@email.com",
        edad:36
      },
      
    ]
  };
  static getPorfesores(): Array<Profesor>{
    return [{
      id:1,
      nombre: "Charles",
      apellido: "Xavier",
      correo: "chx@email.com",
      edad:71   
    },
    {
      id:2,
      nombre: "Erik",
      apellido: "Puentes",
      correo: "ep.45@email.com",
      edad:44   
    },
    {
      id:3,
      nombre: "Darius",
      apellido: "Homayoun",
      correo: "dr@email.com",
      edad:32  
    },
    {
      id:4,
      nombre: "Dario",
      apellido: "Gomez",
      correo: "gomes.1407@email.com",
      edad:54  
    },
    {
      id:5,
      nombre: "Christian",
      apellido: "Rincón",
      correo: "rincon@email.com",
      edad:48  
    },
    {
      id:6,
      nombre: "Rodrigo",
      apellido: "Marangoni",
      correo: "rm@email.com",
      edad:45  
    },]
  }

}


  

