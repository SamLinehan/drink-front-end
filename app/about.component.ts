import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'about',
  template: `
    <h3>About {{title}}</h3>
    <p>Drink is a drinking game that connects people from around the world.</p>
  `
})

export class AboutComponent {
  title = 'Drink';
}
