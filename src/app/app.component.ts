import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inform: any = {}; 

  constructor(private httpService: ServicesService) {}

  ngOnInit(): void {
    this.displayPosts();
  }

  displayPosts() {
    this.httpService.getPosts().subscribe(data => {
      this.inform = data; 
    });
  }
}
