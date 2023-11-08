import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profesor } from '../../models/profesor.class';
import { datos } from '../data/datos.class';

@Injectable()
export class ProfesoresService {

  profesores: Array<Profesor> = datos.getPorfesores();
  constructor() {}
  getProfesores$(): Observable<Array<Profesor>>{
    return of(this.profesores);
  }
  getProfesoresById$(profesorId?: number): Observable<Profesor|undefined>{
    return of(this.profesores.find((pro)=>pro.id == profesorId));
  }
  addProfesor$(payload: Profesor): Observable<Array<Profesor>>{
    this.profesores.push(payload);
    console.log(this.profesores.length);
    return of([...this.profesores]);  
  }
  editPorfesor$(profesorId: number, payload: Profesor): Observable<Array<Profesor>>{
    let profeEditado: Array<Profesor> = this.profesores.map((pro)=>(pro.id === profesorId?{...pro, ...payload}:pro));
    return of(profeEditado);
  }
  deleteProfesor$(profesorId: number): Observable<Array<Profesor>>{
    this.profesores = this.profesores.filter((pro)=>pro.id !== profesorId)
    return of(this.profesores);
  }
}
