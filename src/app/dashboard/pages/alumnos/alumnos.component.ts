import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlumnosComponent } from './dialog-alumnos/dialog-alumnos.component';

import { AlumnosService } from './alumnos.service';
import { Usuario } from '../../models/usuario.class';
import { Observable, map, toArray} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})

export class AlumnosComponent {

alumnosList$: Observable<Array<Usuario>>
idAlumno: number =0;

  constructor(private matDialog:MatDialog, private alumnosService: AlumnosService){
    this.alumnosList$ = this.alumnosService.getAlumnos$(); //Se actualiza llamando al servicio
  }
  /* funcion para crearlo */
  addAlumno(): void{
    this.matDialog.open(DialogAlumnosComponent)
    .afterClosed()
    .subscribe( 
      {
      next: (result)=>{
        if(result){
          let nuevoAlumno: Usuario;
          this.alumnosService.getAlumnos$().pipe(map((al)=> {
            nuevoAlumno = {
              id: al.length+1,
              nombre: result.nombre,
              apellido: result.apellido,
              correo: result.correo,
              edad: 0             
            };
            
          }))
          .subscribe(alumnos=>{
             this.alumnosList$ = this.alumnosService.addAlumnos$(nuevoAlumno);
          });
  
        }
      }
    })
  }
  /* funcion para eliminar alumno */
  onDeleteAlumno(alumnoId: number): void{
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
        this.alumnosService.getAlumnosById$(alumnoId).pipe(map((c)=>c?.nombre)).subscribe((nombre=>{
          if(nombre){
            Swal.fire('Eliminado', `El alumno ${nombre} ha sido eliminado`, 'success');            
          }
        }));
    this.alumnosList$ = this.alumnosService.deleteAlumnos$(alumnoId);
     
      }
    });

  }
  /* funcion para editarlo */
  onEditAlumno(alumnoId: number): void {
    this.matDialog
      .open(DialogAlumnosComponent, {
        data: alumnoId,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.alumnosList$ = this.alumnosService.editAlumnos$(alumnoId, result);
          }
        },
      });
  }






}
