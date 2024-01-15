import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { map } from 'rxjs';
import { LikedService } from './services/liked.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {

  posts$ = this.postsService.posts$;
  likedPosts$ = this.likedService.likedPosts$;

  constructor(
    readonly postsService: PostsService,
    readonly likedService: LikedService,
    readonly router: Router,
  ) {
    console.log('PostsComponent', this.router.config);
  }
}
