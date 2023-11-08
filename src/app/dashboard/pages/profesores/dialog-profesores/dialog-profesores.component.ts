import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesoresService } from '../profesores.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-profesores',
  templateUrl: './dialog-profesores.component.html',
  styleUrls: ['./dialog-profesores.component.scss']
})
export class DialogProfesoresComponent {
  profesorForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<DialogProfesoresComponent>,
    @Inject(MAT_DIALOG_DATA) private profesorId?: number,
    private profesoresService?: ProfesoresService,
    /* Recibo la data */
){
      this.profesorForm = this.fb.group({
        nombre: ["", Validators.required],
        apellido:["", Validators.required],
        correo: ["", [Validators.required, Validators.email]]        
      });

      if(this.profesorId){
        this.profesoresService?.getProfesoresById$(profesorId).subscribe({
          next: (pro)=>{
            if(pro){
              this.profesorForm.patchValue(pro);
            }
          }
        });
        
      }

    }

      /* Funcion para saber si se edita un curso */
      public get isEditing(): boolean {
        return !!this.profesorId;
      }
        /* Obtener tag para el nombre */
      get profesorFormName(){  
        return this.profesorForm.controls['nombre'];
      }
  /* Obtener tag para apellido */
      get profesorFormLastName(){
        return this.profesorForm.controls['apellido'];
      }
  /* Obtener tag para correo */
      get profesorFormEmail(){
        return this.profesorForm.controls['correo'];
      } 
      activateButton(): boolean{
        if(this.profesorForm.invalid){
          return true;
        }else{
          return false;
        }
      }
      
      /* funcion para agregar curso */
      onSubmitProfesor(): void{
        if(this.profesorForm.invalid){
          return this.profesorForm.markAllAsTouched();
        }else{ 
          this.matDialogRef.close(this.profesorForm.value);
        }
      }
}
