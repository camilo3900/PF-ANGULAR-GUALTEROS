import {  Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from '../cursos.service';
import { EstadoCurso } from 'src/app/dashboard/models/curso.class';



@Component({
  selector: 'app-dialog-cursos',
  templateUrl: './dialog-cursos.component.html',
  styleUrls: ['./dialog-cursos.component.scss']
})
export class DialogCursosComponent  {
  selectedValue: string="";
  cursoForm: FormGroup;
  constructor(private matDialogRef: MatDialogRef<DialogCursosComponent>,
    private fb: FormBuilder,
    private cursosService: CursosService,
    @Inject(MAT_DIALOG_DATA) private courseId? : number, 

){ 

  this.cursoForm = this.fb.group({
    nombre: ["", Validators.required],
    estado: [this.selectedValue.valueOf
      , Validators.required],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
  });
  /* Si hay id, el curso se está editando */
  if(this.courseId){
    this.cursosService.getCourseById$(courseId).subscribe({
      next: (dato) =>{
        if(dato){
          console.log(dato);
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
        this.matDialogRef.close(this.cursoForm.value);
      }
    }

    mapEstadoToOption(estado: string): string {
      if (estado === EstadoCurso.caso1) {
        return 'activo';
      } else if (estado === EstadoCurso.caso2) {
        return 'inactivo';
      }
      return estado; // Devuelve el valor original si no hay un mapeo definido
    }
  }


