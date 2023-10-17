import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from 'src/app/dashboard/models/alumno.class';
import { UsuarioInterface } from 'src/app/dashboard/models/usuario.interface';


@Component({
  selector: 'app-dialog-alumnos',
  templateUrl: './dialog-alumnos.component.html',
  styleUrls: ['./dialog-alumnos.component.scss']
})
export class DialogAlumnosComponent {

  alumnoForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<DialogAlumnosComponent>,
    //RECIBO LA DATA
    @Inject(MAT_DIALOG_DATA) public alumno?: UsuarioInterface){
      
    this.alumnoForm  = this.fb.group({
      nombre: ["", Validators.required],
      apellido:["", Validators.required],
      correo: ["", [Validators.required, Validators.email]]
    });
   
    if(this.alumno){
      this.alumnoForm.patchValue(this.alumno);
    }
 
  }
 

  get alumnoFormName(){  
    return this.alumnoForm.controls['nombre'];
  }
  get alumnoFormLastName(){
    return this.alumnoForm.controls['apellido'];
  }
  get alumnoFormEmail(){
    return this.alumnoForm.controls['correo'];
  } 

  activateButton():boolean{
    if(this.alumnoForm.invalid){
      return true;
    }else{
      return false;
    }
    
  }
  onSubmit(){
    if(this.alumnoForm.invalid){
      this.alumnoForm.markAllAsTouched();
     
    }else{
      

      this.matDialogRef.close(this.alumnoForm.value);
     

    }
  }

}
