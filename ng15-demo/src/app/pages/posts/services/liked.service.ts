import { Injectable, inject } from "@angular/core";
import { PostsService } from "./posts.service";
import { map } from "rxjs";

@Injectable()
export class LikedService {
  postsService = inject(PostsService);

  get likedPosts$() {
    return this.postsService.postsData$.pipe(
      map((posts) => posts.filter((post) => post.favorite)),
    );
  }
}