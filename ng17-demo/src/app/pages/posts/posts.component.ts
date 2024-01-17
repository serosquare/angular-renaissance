import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './components/create-post.component';
import { ListPostsComponent } from './components/list-posts.component';
import { ViewPostComponent } from './components/view-post.component';
import { Router, RouterModule } from '@angular/router';
import { LikedService } from './services/liked.service';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CreatePostComponent,
    ListPostsComponent,
    ViewPostComponent,
  ],
  providers: [
    PostsService,
    LikedService,
  ],
  template: `
    <section class="posts">
      <header class="posts-header">
        <div class="posts-header_left">
          <h2 class="posts-header_title">Posts</h2>
        </div>
        <div class="posts-header_right">
          <div class="posts-liked">
            <h5>Liked Posts:</h5>
              <span
                [ngStyle]="{'font-size': likedPosts().length === 0 ? '1rem' : (1 + (likedPosts().length * 0.25)) > 2 ? 2 : (1 + (likedPosts().length * 0.25)) + 'rem' }">{{
                likedPosts().length || 0
                }}</span>
          </div>
          <a class="posts-header_link" routerLink="/posts/create">New Post</a>
        </div>
      </header>
      <router-outlet></router-outlet>
    </section>
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
export class PostsComponent {

  private postsService = inject(PostsService);
  private likedService = inject(LikedService);

  posts$ = this.postsService.posts$;
  likedPosts = this.likedService.likedPosts;

}
