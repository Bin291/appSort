import { Routes } from '@angular/router';
import {GetStartComponent} from './components/get-start/get-start.component';
import {SortLabComponent} from './components/sort-lab/sort-lab.component';

export const routes: Routes = [
  { path: 'home', component: GetStartComponent },
  {path: 'about', component: SortLabComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];
