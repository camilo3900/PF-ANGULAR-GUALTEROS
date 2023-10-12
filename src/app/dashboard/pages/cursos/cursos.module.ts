import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TablasCursosComponent } from './tablas-cursos/tablas-cursos.component';
import { DialogCursosComponent } from './dialog-cursos/dialog-cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    TablasCursosComponent,
    DialogCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[CursosComponent,]
})
export class CursosModule { }
