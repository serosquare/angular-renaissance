import { Injectable, inject, signal } from "@angular/core";
import { PostsService } from "./posts.service";

@Injectable()
export class LikedService {
  private _postLiked = signal<string[]>([]);
  postsService = inject(PostsService);

  get likedPosts() {
    return this._postLiked.asReadonly();
  }

  postHaveLikes(id: string) {
    // console.log('postHaveLikes', id)
    return this._postLiked().includes(id)
  }

  toggleLikes(id: string) {
    this._postLiked.update(state => {
      return state.includes(id)
        ? state.filter((postId) => postId !== id)
        : [...state, id]
      }
    );
    console.log('likedPosts', this._postLiked())
  }
}