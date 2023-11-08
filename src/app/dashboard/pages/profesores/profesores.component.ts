import { Component } from '@angular/core';
import { Profesor } from '../../models/profesor.class';
import { Observable, map } from 'rxjs';
import { ProfesoresService } from './profesores.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogProfesoresComponent } from './dialog-profesores/dialog-profesores.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent {

  profesList$ : Observable<Array<Profesor>>;
  idProfesor: number = 0;
  constructor(private profesoresService: ProfesoresService,
    private matDialog: MatDialog
    ){
      this.profesList$ = profesoresService.getProfesores$();
    }

    addProfesor(): void{
      this.matDialog.open(DialogProfesoresComponent)
    .afterClosed()
    .subscribe( 
      {
      next: (result)=>{
        if(result){
          let nuevoProfesor: Profesor;
          this.profesoresService.getProfesores$().pipe(map((pro)=> {
            nuevoProfesor = {
              id: pro.length+1,
              nombre: result.nombre,
              apellido: result.apellido,
              correo: result.correo,
              edad: 0             
            };
            
          }))
          .subscribe(alumnos=>{
             this.profesList$ = this.profesoresService.addProfesor$(nuevoProfesor);
          });
  
        }
      }
    })

    }
    onEditProfe(profeId: number): void{
      this.matDialog
      .open(DialogProfesoresComponent, {
        data: profeId,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.profesList$ = this.profesoresService.editPorfesor$(profeId, result);
          }
        },
      });
    }

    onDeleteProfe(profesorId: number){
      Swal.fire({
        title: '¿Deseas eliminar este curso?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí se filtra el nombre del alumno
          this.profesoresService.getProfesoresById$(profesorId).pipe(map((c)=>c?.nombre)).subscribe((nombre=>{
            if(nombre){
              Swal.fire('Eliminado', `El alumno ${nombre} ha sido eliminado`, 'success');            
            }
          }));
      this.profesList$ = this.profesoresService.deleteProfesor$(profesorId);
       
        }
      });


    }

}
