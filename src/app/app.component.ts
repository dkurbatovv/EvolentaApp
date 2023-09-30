import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'RxJS'
  
  sequentialNumbers: number[] = [];
  randomNumbers: string[] = [];
  sequentialSubscribe$!: Subscription;
  randomSubscribe$!: Subscription;

  constructor() { }

  start() {
    this.sequentialSubscribe$ = interval(2000).subscribe((value) => {
      this.sequentialNumbers.push(value);
    });

    this.randomSubscribe$ = interval(2000).pipe(
      map(() => `Random Value: ${Math.floor(Math.random() * 1000)}`)).subscribe((value) => {
      this.randomNumbers.push(value);
    });
  }

  stopSequential() {
    if (this.sequentialSubscribe$) {
      this.sequentialSubscribe$.unsubscribe();
    }
  }

  stopRandom() {
    if (this.randomSubscribe$) {
      this.randomSubscribe$.unsubscribe();
    }
  }
}
