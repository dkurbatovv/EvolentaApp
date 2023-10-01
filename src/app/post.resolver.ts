import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http-service.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<string> {
  constructor(private httpService: HttpService) {} 

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpService.getPostById();
  }
}
