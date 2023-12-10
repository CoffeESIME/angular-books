import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, tap, pluck, map } from 'rxjs';
import { Book } from './models/book.model';

interface data {
  status: string;
  total: number;
  books: Book[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  http = inject(HttpClient);
  title = 'bases';
  ngOnInit() {
    console.log('here petition');
    this.http
      .get<data>('https://www.dbooks.org/api/search/python')
      .pipe(
        tap((x) => console.log('antes', x)),
        map((data) => data?.books)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
