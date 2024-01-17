import { Injectable, inject } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from "@angular/router";
import { Observable } from "rxjs";
import { PostsService } from "../posts.service";
import { IPost } from "../../models/post.model";

// @Injectable()
// export class PostResolver implements Resolve<IPost> {
//   constructor(private service: PostsService) { }

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<IPost> | Promise<IPost> | IPost {
//     return this.service.getPost(route.paramMap.get('id') as string);
//   }
// }

export const postResolver: ResolveFn<IPost> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost =>
    inject(PostsService).getPost(route.paramMap.get('id') as string);