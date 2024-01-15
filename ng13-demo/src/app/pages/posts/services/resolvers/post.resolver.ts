import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IPost } from "src/app/pages/posts/models/post.model";
import { PostsService } from "../posts.service";

@Injectable()
export class PostResolver implements Resolve<IPost> {
  constructor(private service: PostsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPost> | Promise<IPost> | IPost {
    return this.service.getPost(route.paramMap.get('id') as string);
  }
}