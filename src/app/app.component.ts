import { Component } from '@angular/core';
import { HttpService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Http';

  constructor(private httpService: HttpService) {}


  getPosts() {
    this.httpService.getPosts().subscribe(data => console.log(data));
  }

  getComments() {
    this.httpService.getComments().subscribe(data => console.log(data));
  }

  postEmptyObject() {
    this.httpService.postEmptyObject().subscribe(data => console.log(data));
  }

  getPostWithErrorHandling() {
    this.httpService.getPostWithErrorHandling().subscribe(data => console.log(data));
  }

  getNonJSONResponse() {
    this.httpService.getNonJSONResponse().subscribe(data => console.log(data));
  }

  deletePost() {
    this.httpService.deletePost().subscribe(data => console.log(data));
  }
  
}
