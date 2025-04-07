import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SortLabComponent} from './components/sort-lab/sort-lab.component';
import {GetStartComponent} from './components/get-start/get-start.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [SortLabComponent, GetStartComponent, RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appSort';

  started = false;

  onStart() {
    this.started = true;
  }

  onReset() {
    this.started = false;
  }
  onStartLab() {
    this.started = true;
  }


}
