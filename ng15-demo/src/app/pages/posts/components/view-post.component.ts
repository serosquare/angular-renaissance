import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { IPost } from '../models/post.model';

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="(post$ | async) as post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <br>
      <span *ngFor="let tag of post.tags">{{ tag }}</span>
    </ng-container>
    <br>
    <a routerLink="/posts">Go Back</a>
  `,
  styles: [``]
})
export class ViewPostComponent {

  private activatedRoute = inject(ActivatedRoute);

  post$ = this.activatedRoute.data.pipe(
    map(({ post }) => post as IPost)
  );

}
