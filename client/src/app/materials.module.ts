import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

const MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatDividerModule,
  MatRadioModule,
  MatIconModule,
  MatCheckboxModule
];

@NgModule (
  {
    imports: [MATERIAL],
    exports: [MATERIAL]
  }
)

export class MaterialModule { }
