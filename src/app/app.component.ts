import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SortLabComponent} from './components/sort-lab/sort-lab.component';

@Component({
  selector: 'app-root',
  imports: [SortLabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appSort';
}
