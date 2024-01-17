import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
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
  styles: `
    :host {
      width: 60vw;

      @media screen and (max-width: 1440px) {
        width: 70vw;
      }

      @media screen and (max-width: 1024px) {
        width: 80vw;
      }

      @media screen and (max-width: 768px) {
        width: 90vw;
      }

      @media screen and (max-width: 480px) {
        width: 100vw;
      }
    }

    .header {
      margin-bottom: 1rem;
      border-bottom: 2px solid #6caeff;

      .nav {
        display: flex;
        align-items: center;

        &_logo {
          height: 4rem;
          margin: 2rem 5rem 0 0;
        }

        &_elements {
          display: flex;

          &_item {
            margin: 0 1rem;
            list-style: none;
            font-size: 1.5rem;
            font-weight: 700;

            &-link {
              color: #6caeff;
              text-decoration: none;

              &:hover {
                color: #2479e2;
              }
            }
          }
        }
      }
    }
  `
})
export class AppComponent {}
