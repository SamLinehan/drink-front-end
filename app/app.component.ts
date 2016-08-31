import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'drink-app',
  template: `
    <h1>Welcome to Drink!</h1>
    <nav>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Guide</h2>
      <h2>Support</h2>
      <div>
        <h3>Sign Up</h3>
        <h3>Log In</h3>
      </div>
    </nav>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
