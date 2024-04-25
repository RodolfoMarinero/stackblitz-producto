import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { PruebaComponent } from './app/prueba/prueba.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PruebaComponent],
  template: `
   <app-prueba></app-prueba>
    <h1>Hello from hjffjgrfgrhrj jferjk!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
