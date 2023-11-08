import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from '../../models/curso.class';
import { DialogCursosComponent } from './dialog-cursos/dialog-cursos.component';
import { CursosService } from './cursos.service';
import { Observable, map} from 'rxjs';
import Swal from 'sweetalert2';
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

/*     abrirDialog():void{
      this.abrirForm = !this.abrirForm;
    }; */
    /* Para agregar */
    addCourse(): void{
      this.matDialog
      .open(DialogCursosComponent)
      .afterClosed()
      .subscribe({
        next: (v)=>{
          if(v){
            let nuevoCurso: Curso;
            this.cursosService.getCourses$().pipe( map((cursoArray)=>{
              nuevoCurso={
                id: cursoArray.length+1,
                nombre: v.nombre,
                estado: v.estado,
                startDate: v.startDate,
                endDate: v.endDate
              };
            })).subscribe(cursos=>{
              Swal.fire({
                title: "Operacion Exitosa!",
                text: `Se ha creado el curso: ${nuevoCurso.nombre}`,
                icon: "success"
              });
              this.cursos$ = this.cursosService.createCourse$(nuevoCurso);
            });
          }

        }
      });

    }
    onClickEdit(cursoId: number): void{
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
      Swal.fire({
        title: '¿Deseas eliminar este curso?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí puedes realizar la acción de eliminación
          Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
          this.cursos$ = this.cursosService.deleteCourse$(cursoId);
        }
      });

    }


}
