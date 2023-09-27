import { Component } from '@angular/core';


interface Books {
  title: string | null
  author: string | null
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Validation';

  books: Books[] = [
    {
      title: 'Секрет',
      author: 'Иванов',
    },
    {
      title: 'Правда',
      author: 'Смирнов',
    },
  ];

  create_book = {
    title: null,
    author: null,
  };

  createBook() {
    this.books.push({
      title: this.create_book.title,
      author: this.create_book.author,
    });
  }
}

