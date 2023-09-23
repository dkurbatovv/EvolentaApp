import { Component } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvolentaApp-CommonJS';

  showNotification() {
    Notiflix.Notify.success('Данные успешно отправлены!');
  }
}
