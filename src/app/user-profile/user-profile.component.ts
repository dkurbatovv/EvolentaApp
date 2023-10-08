import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  post: any;
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postService: DataService
  ) {}

  ngOnInit(): void {
    const postIdParam = this.route.snapshot.paramMap.get('id');
    if (postIdParam !== null) {
      const postId = +postIdParam;
      this.loadPost(postId);
    }
  }

  loadPost(id: number) {
    this.postService.getPostById(id).subscribe(post => {
      this.post = post;
    });
  }

  editPost() {
    this.editing = true;
  }

  savePost() {
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }
}
