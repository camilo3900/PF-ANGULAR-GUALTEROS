import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesoresComponent } from './profesores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TablasProfesoresComponent } from './tablas-profesores/tablas-profesores.component';
import { DialogProfesoresComponent } from './dialog-profesores/dialog-profesores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesoresService } from './profesores.service';




@NgModule({
  declarations: [
    ProfesoresComponent,
    TablasProfesoresComponent,
    DialogProfesoresComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    ProfesoresComponent,
    TablasProfesoresComponent,
    DialogProfesoresComponent,   
  ], 
  providers:[
    ProfesoresService
  ]
})
export class ProfesoresModule { }
