import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnosService } from '../alumnos.service';



@Component({
  selector: 'app-dialog-alumnos',
  templateUrl: './dialog-alumnos.component.html',
  styleUrls: ['./dialog-alumnos.component.scss']
})
export class DialogAlumnosComponent {

  alumnoForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<DialogAlumnosComponent>,
    private alumnosService: AlumnosService,
    //RECIBO LA DATA
    @Inject(MAT_DIALOG_DATA) private alumnoId?: number){
     
    /* Validaciones formulario de alumnos */
    this.alumnoForm  = this.fb.group({
      nombre: ["", Validators.required],
      apellido:["", Validators.required],
      correo: ["", [Validators.required, Validators.email]]
    });
    /* Para pisar los datos en el formulario */
    if(this.alumnoId){
      this.alumnosService.getAlumnosById$(alumnoId).subscribe({
        next: (al)=>{
          if(al){
            this.alumnoForm.patchValue(al);
          }
        }
      });
      
    }
 
  }

  public get isEditing(): boolean {
    return !!this.alumnoId;
  }
 
  /* Obtener tag para el nombre */
  get alumnoFormName(){  
    return this.alumnoForm.controls['nombre'];
  }
  /* Obtener tag para apellido */
  get alumnoFormLastName(){
    return this.alumnoForm.controls['apellido'];
  }
  /* Obtener tag para correo */
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
  onSubmitAlumno(){
    if(this.alumnoForm.invalid){
      /* se marcan todos los campos del form */
      this.alumnoForm.markAllAsTouched();
     
    }else{   
      /* Se obtienen valores de campos del form */ 
      this.matDialogRef.close(this.alumnoForm.value);
 
    }
  }

}
