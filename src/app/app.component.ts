import { Component } from '@angular/core';
import { ResponseService } from './response.service';
import { Response } from './interface/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvolentaApp-TS';

  responseData: Response[];

  constructor(private responseService: ResponseService) {
    this.responseData = this.responseService.getResponseData();
  }
}
