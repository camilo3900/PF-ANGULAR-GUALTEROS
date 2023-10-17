import { Curso, EstadoCurso } from "../../models/curso.class";
export class datos {
  static getCursos(): Array<Curso>{
    return [{
        id:1,
        nombre: "Simulación de Vuelos",
        estado: EstadoCurso.caso1,
      },
      {
        id:2,
        nombre: "Manejo de Sistemas de Propulsion",
        estado: EstadoCurso.caso1,
      },
      {
        id:3,
        nombre: "Metodología Espacial",
        estado: EstadoCurso.caso1,
      },
      {
        id:4,
        nombre: "Proyectos Espaciales",
        estado: EstadoCurso.caso1,
      },
      {
        id:5,
        nombre: "Armamento Espacial",
        estado: EstadoCurso.caso1,
      },
      ];
  };

}


  

