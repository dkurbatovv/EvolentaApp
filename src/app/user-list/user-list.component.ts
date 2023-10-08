import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  posts!: any[];

  constructor(private postService: DataService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.slice(0, 5);
    });
  }
}
