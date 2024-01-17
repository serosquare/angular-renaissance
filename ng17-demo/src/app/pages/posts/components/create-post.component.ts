import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { IPost } from '../models/post.model';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <a routerLink="/posts">Back to Posts</a>
    <h1>Create New Post</h1>
    <form class="create-form" [formGroup]="createForm" (ngSubmit)="createPost()">
      <div class="form-element">
        <label for="title">Title</label>
        <br>
        <input type="text" id="title" name="title" formControlName="title">
      </div>
      <div class="form-element">
        <label for="body">Body</label>
        <br>
        <textarea type="text" id="body" name="body" formControlName="body"></textarea>
      </div>
      <div class="form-element">
        <label for="tags">Tags</label>
        <br>
        <select name="tags" id="tags" multiple formControlName="tags">
          <option *ngFor="let tag of tags" [value]="tag.id" [ngValue]="tag.name">{{ tag.name }}</option>
        </select>
      </div>
      <button type="submit">Create</button>
    </form>
  `,
  styles: [``]
})
export class CreatePostComponent {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private postsService = inject(PostsService);

  tags = [
    { id: 1, name: 'action' },
    { id: 2, name: 'adventure' },
    { id: 3, name: 'comedy' },
    { id: 4, name: 'drama' },
    { id: 5, name: 'fantasy' },
    { id: 6, name: 'horror' },
    { id: 7, name: 'mystery' },
    { id: 8, name: 'romance' },
    { id: 9, name: 'thriller' },
    { id: 10, name: 'western' },
  ];

  createForm = this.formBuilder.group({
    title: '',
    body: '',
    tags: [],
  });

  createPost() {
    this.postsService
    .createPost({
        ...this.createForm.value,
        userId: 1,
      } as Partial<IPost>)
      .subscribe(() => this.router.navigate(['/posts']))
  }
}
