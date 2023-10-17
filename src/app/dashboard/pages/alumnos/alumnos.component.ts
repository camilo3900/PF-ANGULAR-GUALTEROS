import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlumnosComponent } from './dialog-alumnos/dialog-alumnos.component';
import { UsuarioInterface } from '../../models/usuario.interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})

export class AlumnosComponent {

alumnosList: Array<UsuarioInterface> = [];


  constructor(private matDialog:MatDialog){

    this.alumnosList.push({
      id:1,
      nombre: "Diego",
      apellido: "Patarroyo",
      correo: "diego@email.com",
      edad:22
    },
    {
      id:2,
      nombre: "Fabian",
      apellido: "Guevara",
      correo: "fgue.33@email.com",
      edad:36
    },
    {
      id:3,
      nombre: "Luis",
      apellido: "Escobar",
      correo: "lucho@email.com",
      edad:36
    },)
   
  }


  openUsersDialog(): void{
    this.matDialog
    .open(DialogAlumnosComponent)
    .afterClosed()
    .subscribe({
      next:(value)=>{
        console.log('valor: ', value);
        if(!!value){
          this.alumnosList = [
            ...this.alumnosList,
          {id: this.alumnosList.length+1,
            ...value,},
         ];
        }
        
      },
    });
  };


  onEditUser(alumno: UsuarioInterface): void {
    this.matDialog.open(DialogAlumnosComponent, {
        data: alumno})
        .afterClosed()
        .subscribe({
          next:(v)=>{
            if(!!v){
              console.log(v);
              
              this.alumnosList = this.alumnosList.map((el)=>
                (el.id==alumno?.id)?{
                  ...el, ...v
                }:el);
              }
            },
            });
          
        
  }

  onDeleteAlumno(alumnoId: number): void{
    let persona = this.alumnosList.filter((u)=>u.id==alumnoId);
    if(JSON.stringify(confirm(`quieres eliminar este alumno? ${persona}`))){
      this.alumnosList= this.alumnosList.filter((u)=>u.id !== alumnoId);
    };
  };

}
