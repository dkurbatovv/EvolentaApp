// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Добавьте этот импорт
import { MatTabsModule } from '@angular/material/tabs'; // Импортируйте нужные компоненты из Angular Material

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    // Другие компоненты
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Добавьте BrowserAnimationsModule
    MatTabsModule, // Импортируйте нужные модули Angular Material
    // Другие модули Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
