import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDatailComponent } from './curso-datail/curso-datail.component';


const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    children:[
        {
            path: 'cursos/:id',
            component: CursoDatailComponent
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
