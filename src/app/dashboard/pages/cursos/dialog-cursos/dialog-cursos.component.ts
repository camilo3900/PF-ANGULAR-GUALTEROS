import {  Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-cursos',
  templateUrl: './dialog-cursos.component.html',
  styleUrls: ['./dialog-cursos.component.scss']
})
export class DialogCursosComponent  {

  cursoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
){ 

  this.cursoForm = this.fb.group({
    name: ['', Validators.required],
    state: ['', Validators.required],
  });



    }
  }


