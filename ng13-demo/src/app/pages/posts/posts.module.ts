import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './services/posts.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/app/services/interceptors/api.interceptor';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostResolver } from './services/resolvers/post.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikedService } from './services/liked.service';
import { ListPostsComponent } from './components/list-posts/list-posts.component';


@NgModule({
  declarations: [
    PostsComponent,
    ViewPostComponent,
    CreatePostComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostsService,
    PostResolver,
    LikedService,
  ]
})
export class PostsModule { }
