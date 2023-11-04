import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../models/curso.class';
import { DialogCursosComponent } from './dialog-cursos/dialog-cursos.component';
import { CursosService } from './cursos.service';
import { Observable, map, toArray } from 'rxjs';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  abrirForm: boolean = false;
  cursos$: Observable<Array<Curso>>;
  constructor(private cursosService: CursosService,
    private matDialog: MatDialog){
    this.cursos$ = this.cursosService.getCourses$();
      
    }

    abrirDialog():void{
      this.abrirForm = !this.abrirForm;
    };

    addCourse(): void{
      this.matDialog
      .open(DialogCursosComponent)
      .afterClosed()
      .subscribe({
        next: (v)=>{
          if(v){
            this.cursos$.pipe(toArray(), map((cursoArray)=>{
              const longitud = cursoArray.length;
              return{
                id: longitud+1,
                nombre: v.name,
                estado: v.estado,
                startDate: v.startDate,
                endDate: v.endDate
              };
            }))
          }

        }
      });

    }

 /*    if(v){
      this.cursos$ = this.cursosService.createCourse$({
        id: this.cursos$.pipe(toArray(), map((v)=>v.length)).subscribe(longitud=> longitud+1),
        nombre: v.name,
        estado: v.estado,
        startDate: v.startDate,
        endDate: v.endDate
      });
    } */
    onClickEdit(cursoId: number){
     
        this.matDialog.open(DialogCursosComponent, {
          data: cursoId,
        }).afterClosed()
        .subscribe({
          next: (result)=>{
            if(!!result){
              this.cursos$ = this.cursosService.editCourse$(cursoId, result);
            }
          },
        });
      
    }
    onClickDelete(cursoId: number){
      alert("Borrando")
      this.cursos$ = this.cursosService.deleteCourse$(cursoId);
    }


}
