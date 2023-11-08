import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profesor } from 'src/app/dashboard/models/profesor.class';

@Component({
  selector: 'app-tablas-profesores',
  templateUrl: './tablas-profesores.component.html',
  styleUrls: ['./tablas-profesores.component.scss']
})
export class TablasProfesoresComponent {
  @Input()
  dataSource: Array<Profesor> = [];
  @Output()
  editProfesor= new EventEmitter();
  @Output()
  deleteProfesor = new EventEmitter<number>();
  
  

  displayedColumns= [ "id", "fullname", "email", "events"];

}
