import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { ClasesComponent } from './pages/clases/clases.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: 'home',
            component: HomeComponent,

        },
        {
            path: 'cursos',
            loadChildren: ()=>import('../dashboard/pages/cursos/cursos.module').then((m)=>m.CursosModule)
        },
        {
            path: 'alumnos',
            component: AlumnosComponent,
        },
        {
            path: 'profesores',
            component: ProfesoresComponent,
        },
        {
            path: 'clases',
            component: ClasesComponent,
        },
        {
            path: '**',//por defecto debe mostrarse el home
            component: HomeComponent,
        }
    
      
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }