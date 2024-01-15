import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent {

  post$ = this.activatedRoute.data.pipe(
    map(({ post }) => post as IPost)
  );

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

}
