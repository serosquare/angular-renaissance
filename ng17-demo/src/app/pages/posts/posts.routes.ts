import { Routes } from "@angular/router";
import { CreatePostComponent } from "./components/create-post.component";
import { ListPostsComponent } from "./components/list-posts.component";
import { ViewPostComponent } from "./components/view-post.component";
import { PostsComponent } from "./posts.component";
import { postResolver } from "./services/resolvers/post.resolver";
import { PostsService } from "./services/posts.service";
import { HttpClientModule } from "@angular/common/http";

export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: ListPostsComponent,
      },
      {
        path: 'create',
        component: CreatePostComponent,
      },
      {
        path: ':id',
        component: ViewPostComponent,
        resolve: {
          post: postResolver,
        },
      },
    ]
  },
];