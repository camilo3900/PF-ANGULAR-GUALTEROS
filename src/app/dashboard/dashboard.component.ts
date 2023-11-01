import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showSidebar = true;


  @ViewChild('drawer')
  sidenav?: MatSidenav;
  constructor(){

  }
  /* habilita el componente de cursos */
  showData(lista: Array<boolean>): void {
    this.sidenav?.toggle();
  }
  
}

