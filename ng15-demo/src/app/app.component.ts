import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
    <header id="header" class="header">
      <nav id="nav" class="nav">
        <img class="nav_logo" src="/assets/unosquare/unosquare-logo.png" alt="Unosquare Logo">
        <ul class="nav_elements">
          <li class="nav_elements_item">
            <a class="nav_elements_item-link" routerLink="/">Home</a>
          </li>
          <li class="nav_elements_item">
            <a class="nav_elements_item-link" routerLink="/posts">Posts</a>
          </li>
        </ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng15-demo';
}
