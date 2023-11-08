import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { ClasesComponent } from './dashboard/pages/clases/clases.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { ProfesoresComponent } from './dashboard/pages/profesores/profesores.component';
import { CursoDatailComponent } from './dashboard/pages/cursos/curso-datail/curso-datail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: "casa",
        component: HomeComponent,
      },
      {
        path: 'alumnos',
        component: AlumnosComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'cursos/:id',
        component: CursoDatailComponent,
      },
      {
        path: 'clases',
        component: ClasesComponent,
      },
      {
        path: 'profesores',
        component: ProfesoresComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,

  },
  {
    path: "**",
    redirectTo: "auth",
  }
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
