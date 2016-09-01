import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'drink-app',
  template: `
    <main>
      <h1>Welcome to Drink!</h1>
      <nav>
        <h2>Home</h2>
        <h2><a routerLink="/about">About</a></h2>
        <h2>Guide</h2>
        <h2>Support</h2>
        <div>
          <h3>Sign Up</h3>
          <h3>Log In</h3>
        </div>
      </nav>
    </main>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
