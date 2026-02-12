import { Component, signal } from '@angular/core';
import { Header } from './layout/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [  RouterOutlet, Header,],
  template: `<app-header/>
  <div class="h-[calc(100%-64px)] overflow-auto">
    <router-outlet/>
</div>
  
  `,
  styles: [],
})
export class App {
   
}
