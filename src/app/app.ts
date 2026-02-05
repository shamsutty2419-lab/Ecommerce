import { Component, signal } from '@angular/core';
import { Header } from './layout/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [  RouterOutlet, Header,],
  template: `<app-header/>
  <router-outlet/>
  `,
  styles: [],
})
export class App {
   
}
