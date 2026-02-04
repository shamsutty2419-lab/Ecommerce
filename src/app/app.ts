import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [  MatToolbar],
  template: `<mat-toolbar> Modern-store</mat-toolbar>,
    
  `,
  styles: [],
})
export class App {
   
}
