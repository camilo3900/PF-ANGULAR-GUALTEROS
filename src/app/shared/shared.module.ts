import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FuenteTitulosDirective } from './directivas/fuente-titulos.directive';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
@NgModule({
  declarations: [
    FullNamePipe,
    FuenteTitulosDirective,
    FormErrorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule, 
    MatCardModule,
    MatListModule,
    FullNamePipe,
    FormErrorsPipe
   ],
})
export class SharedModule { }
