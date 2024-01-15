import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostResolver } from './services/resolvers/post.resolver';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

const routes: Routes = [
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
          post: PostResolver,
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
