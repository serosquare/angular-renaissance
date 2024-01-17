import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../services/posts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
    <div class="posts-list">
      <ng-container *ngIf="posts$ | async as posts">
        <article *ngFor="let post of posts" class="posts-list_item">
          <h3 class="posts-list_title">
            <a class="posts-list_title_link" routerLink="/posts/{{ post.id }}">{{ post.body }}</a>
          </h3>
          <div class="posts-list_like" [ngClass]="{'posts-list_liked': post.favorite }"
            (click)="postsService.toggleLike(post.id)">
            <span class="material-symbols-outlined">
              favorite
            </span>
          </div>
        </article>
      </ng-container>
    </div>
  `,
  styles: [`
    .posts {
      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;

        &_link {
          background-color: #6caeff;
          color: white;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 5%;
        }

        &_right {
          display: flex;
          align-items: center;
        }
      }

      &-liked {
        display: flex;
        align-items: center;
        margin-right: 2rem;

        h5 {
          margin-right: 0.5rem;
        }
      }

      &-list {
        &_item {
          display: flex;
          align-items: center;
          padding: 0.5rem 0 1rem 0;
          border-bottom: 1px solid #ccc;
        }

        &_title {
          font-size: 1rem;


          &_link {
            color: #626262;
            text-decoration: none;
          }
        }

        &_like {
          padding: 0 1rem;
        }

        &_liked {
          color: red;
        }
      }
    }
  `]
})
export class ListPostsComponent {
  postsService = inject(PostsService);

  posts$ = this.postsService.posts$;
}
