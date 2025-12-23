import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    This is shamsutty
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ng-ecommerce');
}
