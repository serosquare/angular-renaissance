import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent {
  posts$ = this.postsService.posts$;

  constructor(
    readonly postsService: PostsService,
  ) { }

}
