import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProfesoresModule } from './pages/profesores/profesores.module';
import { HomeModule } from './pages/home/home.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosModule,
    HomeModule,
    CursosModule,
    ProfesoresModule,
    RouterModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
