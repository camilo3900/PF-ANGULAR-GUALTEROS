import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { datos } from '../data/datos.class';
import { Usuario } from '../../models/usuario.class';

@Injectable()
export class AlumnosService {
  alumnos: Array<Usuario> = datos.getAlumnos();
  constructor() {}
   getAlumnos$(): Observable<Array<Usuario>>{
    return of(this.alumnos);
   }
   getAlumnosById$(alumnoId?: number): Observable<Usuario|undefined>{
    return of(this.alumnos.find((al)=>al.id == alumnoId));
   }

   addAlumnos$(payload: Usuario): Observable<Array<Usuario>>{
      this.alumnos.push(payload);
      console.log(this.alumnos.length);
      
      return of([...this.alumnos]);
   }
   editAlumnos$(alumnoId: number, payload:Usuario): Observable<Array<Usuario>>{
    let editado: Array<Usuario> =  this.alumnos.map((al)=>(al.id===alumnoId?{...al, ...payload}:al));
    return of(editado);
   }
   deleteAlumnos$(alumnoId: number): Observable<Array<Usuario>>{
    this.alumnos = this.alumnos.filter((al)=>al.id !== alumnoId);
    return of(this.alumnos);
   }
}
