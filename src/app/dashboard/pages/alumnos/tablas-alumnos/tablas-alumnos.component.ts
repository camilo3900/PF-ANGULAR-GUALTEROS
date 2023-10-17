import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from 'src/app/dashboard/models/alumno.class';
import { UsuarioInterface } from 'src/app/dashboard/models/usuario.interface';

@Component({
  selector: 'app-tablas-alumnos',
  templateUrl: './tablas-alumnos.component.html',
  styleUrls: ['./tablas-alumnos.component.scss']
})
export class TablasAlumnosComponent {

  @Input()
  dataSource : Array<UsuarioInterface> = [];
  @Output()
  editUser = new EventEmitter<UsuarioInterface>();
  @Output()
  deleteUser = new EventEmitter<number>();
  displayedColumns = ['id', 'fullName', 'email', 'actions'];

}
