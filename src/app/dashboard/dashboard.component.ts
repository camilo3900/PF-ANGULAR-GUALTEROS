import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showSidebar = true;
  opcionAlumnos = true;
  opcionCursos = false;

  @ViewChild('drawer')
  sidenav?: MatSidenav;
  constructor(){

  }
  /* habilita el componente de cursos */
  showData(lista: Array<boolean>): void {
    this.opcionAlumnos
    this.sidenav?.toggle();
  }
  onClickCursos(){
    this.opcionAlumnos=true;
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

