import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso} from 'src/app/dashboard/models/curso.class';

@Component({
  selector: 'app-tablas-cursos',
  templateUrl: './tablas-cursos.component.html',
  styleUrls: ['./tablas-cursos.component.scss']
})
export class TablasCursosComponent {
 

  @Input()
  dataSource : Array<Curso>=[];

  @Output()
  clickEdit= new EventEmitter<Curso>();


  displayedColumns= ["id", "name", "state", "action"]
}
