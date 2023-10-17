import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {  MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  showFiller = true;
  @Output()
  mostrarVentana = new EventEmitter();
  @Output()
  mostrarVentanaCursos = new EventEmitter();
  @Output()
  mostrarVentanaClases = new EventEmitter();





}
