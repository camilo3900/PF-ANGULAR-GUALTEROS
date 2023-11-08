import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/dashboard/models/usuario.class';


@Component({
  selector: 'app-tablas-alumnos',
  templateUrl: './tablas-alumnos.component.html',
  styleUrls: ['./tablas-alumnos.component.scss']
})
export class TablasAlumnosComponent {

  @Input()
  dataSource : Array<Usuario> = [];
  @Output()
  editUser = new EventEmitter();
  @Output()
  deleteUser = new EventEmitter<number>();
  displayedColumns = ['id', 'fullName', 'email', 'actions'];

}
