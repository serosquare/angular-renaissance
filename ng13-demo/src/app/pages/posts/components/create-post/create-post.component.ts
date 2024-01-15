import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

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
  createForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: '',
      body: '',
      tags: [],
    });
  }

  createPost() {
    this.postsService.createPost({
      ...this.createForm.value,
      userId: 1,
    }).subscribe((res) => {
      this.router.navigate(['/posts']);
    })
  }

}
