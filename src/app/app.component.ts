import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs';
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
  public http: HttpClient = inject(HttpClient);
  public title: string = 'bases';
  public books: Book[] = [];
  ngOnInit() {
    console.log('here petition');
    this.http
      .get<data>('https://www.dbooks.org/api/search/python')
      .pipe(
        tap((x) => console.log('antes', x)),
        map((data) => data?.books)
      )
      .subscribe((data) => {
        this.books=data
        console.log(data);
      });
  }
}
