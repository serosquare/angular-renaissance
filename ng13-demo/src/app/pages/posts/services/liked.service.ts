import { Injectable } from "@angular/core";
import { PostsService } from "./posts.service";
import { map } from "rxjs";

@Injectable()
export class LikedService {
  constructor(
    private postsService: PostsService,
  ) { }

  get likedPosts$() {
    console.log('likedPosts$');
    return this.postsService.postsData$.pipe(
      map((posts) => posts.filter((post) => post.favorite)),
    );
  }
}