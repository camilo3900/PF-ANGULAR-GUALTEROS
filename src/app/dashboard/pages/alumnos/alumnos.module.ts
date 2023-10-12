import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { DialogAlumnosComponent } from './dialog-alumnos/dialog-alumnos.component';
import { TablasAlumnosComponent } from './tablas-alumnos/tablas-alumnos.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    DialogAlumnosComponent,
    TablasAlumnosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlumnosComponent,
  ]
})
export class AlumnosModule { }
