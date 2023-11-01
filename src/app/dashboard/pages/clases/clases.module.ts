import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ClasesModule { }
