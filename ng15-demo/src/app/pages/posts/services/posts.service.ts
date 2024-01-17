import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';

import { IPost } from '../models/post.model';

@Injectable()
export class PostsService {
  private http = inject(HttpClient);

  dataRquested = false;
  private URI = 'https://dummyjson.com';
  private state = new BehaviorSubject<IPost[]>([]);

  get postsData$() {
    return this.state.asObservable()
  }

  get posts$() {
    if (!this.dataRquested) {
      return this.http.get<{ posts: IPost[] }>(this.URI + '/post').pipe(
        map(({ posts }) => posts.map((post) => ({ ...post, favorite: false }))),
        tap((posts) => this.state.next(posts)),
        switchMap(() => this.postsData$),
        tap(() => this.dataRquested = true),
      );
    }
    return this.postsData$
  }

  getPost(id: string): Observable<IPost> | Promise<IPost> | IPost {
    return this.http.get<IPost>(this.URI + '/post/' + id);
  }

  createPost(postData: Partial<IPost>) {
    return this.http.post<IPost>(
      this.URI + '/post/add',
      postData,
    );
  }

  toggleLike(id: string) {
    this.state.next(this.state.value.map((post) => {
      if (post.id === id) {
        return { ...post, favorite: !post.favorite };
      }
      return post;
    }));
  }
}
