import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso} from 'src/app/dashboard/models/curso.class';

@Component({
  selector: 'app-tablas-cursos',
  templateUrl: './tablas-cursos.component.html',
  styleUrls: ['./tablas-cursos.component.scss']
})
export class TablasCursosComponent {
 

  @Input()
  dataSource : Array<Curso> =[];
/*   @Output()
  clickDetail = new EventEmitter<Curso>(); */
  @Output()
  clickEdit= new EventEmitter<number>();
  @Output()
  clickDelete = new EventEmitter<number>();


  displayedColumns= ["id", "name", "state", "firstDate", "endDate", "action"]
}
