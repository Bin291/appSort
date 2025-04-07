import {Component, Output} from '@angular/core';
import {RouterLink} from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-start',
  imports: [],
  templateUrl: './get-start.component.html',
  styleUrl: './get-start.component.scss'
})
export class GetStartComponent {
  @Output() start = new EventEmitter<void>();

  startApp() {
    this.start.emit();
  }

}
