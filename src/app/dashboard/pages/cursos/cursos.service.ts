import { Injectable } from '@angular/core';
import { Curso } from '../../models/curso.class';
import { datos } from '../data/datos.class';
import { Observable, of } from 'rxjs';

@Injectable()
export class CursosService {
  listaCursos: Array<Curso> = datos.getCursos();
  constructor() { }

  getCourses$(): Observable<Array<Curso>>{
    return of(this.listaCursos);
  }
  createCourse$(payload: Curso): Observable<Array<Curso>>{
    this.listaCursos.push(payload);
    return of([...this.listaCursos]);
  }

  editCourse$(id: number, payload: Curso): Observable<Array<Curso>> {
    return of(
      this.listaCursos.map((c) => (c.id === id ? { ...c, ...payload } : c))
    );
  }

  deleteCourse$(id: number): Observable<Curso[]> {
    this.listaCursos = this.listaCursos.filter((c) => c.id !== id);
    return of(this.listaCursos);
  }

  getCourseById$(id?: number): Observable<Curso | undefined> {
    return of(this.listaCursos.find((c) => c.id == id));
  }
}
