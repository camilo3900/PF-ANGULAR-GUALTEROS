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
    loadChildren: ()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
    
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then((m)=>m.AuthModule)

  },
  {
    path: "**",
    redirectTo: 'auth/login',
  }
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
