import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  getComments() {
    const options = { params: { postId: '1' } };
    return this.http.get('https://jsonplaceholder.typicode.com/comments', options);
  }
  
  postEmptyObject(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
  }
  
  getPostWithErrorHandling() {
    return new Observable((observer) => {
      this.http.get('https://jsonplaceholder.typicode.com/post').subscribe(
        (data) => {
          console.log('Результат запроса:', data);
          observer.next(data);
          observer.complete();
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof ErrorEvent) {
              console.error('Произошла ошибка:', err.error.message);
            } else {
            console.error(`Сервер вернул код ошибки ${err.status}, текст ошибки: ${err.error}`);
          }
          observer.error(err);
        }
      );
    });
  }
  
  getNonJSONResponse() {
    const headers = new HttpHeaders().set('X-Test', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers, responseType: 'text' });
  }
  
  deletePost(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

  getPostById() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
