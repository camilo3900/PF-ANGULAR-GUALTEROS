import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  opcionAlumnos = false;
  opcionCursos = false;
  showFiller = true;
  @ViewChild('drawer')
  sidenav?: MatSidenav;
  constructor(){

  }
  /* habilita el componente de cursos */
  onClickCursos(){
    this.opcionAlumnos=false;
    this.opcionCursos=true;
    this.sidenav?.toggle();
  }
    /* habilita el componente de alumnos */
  onCLickAlumnos(){
    this.opcionCursos=false;
    this.opcionAlumnos=true;
    this.sidenav?.toggle();
  }
    /* habilita el componente de clases */
  onClickClases(){
    this.sidenav?.toggle();
  }

}

