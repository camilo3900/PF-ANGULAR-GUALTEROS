import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TablasCursosComponent } from './tablas-cursos/tablas-cursos.component';
import { DialogCursosComponent } from './dialog-cursos/dialog-cursos.component';
import {MatButtonModule} from '@angular/material/button';
import { CursoDatailComponent } from './curso-datail/curso-datail.component';
import { RouterModule } from '@angular/router';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    TablasCursosComponent,
    DialogCursosComponent,
    CursoDatailComponent,
  ],
  imports: [CommonModule, SharedModule, MatButtonModule, RouterModule],
  exports: [
    CursosComponent,
    TablasCursosComponent,
    DialogCursosComponent,
    CursoDatailComponent,
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule {}
