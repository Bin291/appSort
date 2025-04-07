import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



// Import Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Import FormsModule for ngModel
import { FormsModule } from '@angular/forms';

// Import BrowserAnimationsModule (required for Angular Material animations)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SortLabComponent} from '../components/sort-lab/sort-lab.component';
import {GetStartComponent} from '../components/get-start/get-start.component';
import {AppComponent} from '../app.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for [(ngModel)]
    BrowserAnimationsModule, // Required for Angular Material
    MatFormFieldModule, // For mat-form-field and mat-label
    MatSelectModule, // For mat-select and mat-option
    MatButtonModule, // For mat-raised-button and mat-button
    MatIconModule,
    AppComponent,
    SortLabComponent,
    GetStartComponent
    // For mat-icon-button
  ],
  providers: [],

})
export class AppModule { }
