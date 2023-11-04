import {  Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-dialog-cursos',
  templateUrl: './dialog-cursos.component.html',
  styleUrls: ['./dialog-cursos.component.scss']
})
export class DialogCursosComponent  {
  selectedValue: string ="";
  cursoForm: FormGroup;
  constructor(private matDialogRef: MatDialogRef<DialogCursosComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private courseId? : number, 
    private cursoService?: CursosService
){ 

  this.cursoForm = this.fb.group({
    name: ['', Validators.required],
    state: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });
  /* Si hay id, el curso se está editando */
  if(courseId){
    this.cursoService?.getCourseById$(courseId).subscribe({
      next: (dato) =>{
        if(dato){
          this.cursoForm.patchValue(dato);
        }
      }
    });
  } 
    }
    /* Funcion para saber si se edita un curso */
    public get isEditing(): boolean {
      return !!this.courseId;
    }
    /* funcion para agregar curso */
    onSubmitCourse(): void{
      if(this.cursoForm.invalid){
        return this.cursoForm.markAllAsTouched();
      }else{
        console.log(this.cursoForm.value);
        
        this.matDialogRef.close(this.cursoForm.value);
      }
    }
  }


