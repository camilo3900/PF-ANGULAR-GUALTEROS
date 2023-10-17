import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { DialogAlumnosComponent } from './dialog-alumnos/dialog-alumnos.component';
import { TablasAlumnosComponent } from './tablas-alumnos/tablas-alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlumnosComponent,
    DialogAlumnosComponent,
    TablasAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AlumnosComponent,
    TablasAlumnosComponent,
    DialogAlumnosComponent,
    
  ]
})
export class AlumnosModule { }
