import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';



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
    CursosModule,
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
