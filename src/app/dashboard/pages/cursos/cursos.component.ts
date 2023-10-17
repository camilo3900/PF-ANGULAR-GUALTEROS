import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { datos } from '../data/datos.class';
import { Curso } from '../../models/curso.class';
import { DialogCursosComponent } from './dialog-cursos/dialog-cursos.component';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  abrirForm: boolean = false;
  cursos: Array<Curso> = datos.getCursos();
  constructor(){

      
    }

    abrirDialog():void{
      this.abrirForm = !this.abrirForm;
    }

/*     openCursosDialog(): void {
      this.matDialog
        .open(DialogCursosComponent)
        .afterClosed()
        .subscribe({
          next: (v) => {
            if (!!v) {
              this.cursos = [
                ...this.cursos,
                {
                  ...v,
                  id: new Date().getTime(),
                },
              ];
            }
          },
        });
    } */

    onClickEdit(nombreCurso: object){
     
        alert("curso: "+nombreCurso);
      
    }
    onClickDelete(){
      alert("Borrando")
    }


}
