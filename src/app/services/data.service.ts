import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { Book } from '../models/book.model';

interface data {
  status: string;
  total: number;
  books: Book[];
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string = 'https://www.dbooks.org/api/search/python';
  constructor(private http: HttpClient) {}
  getData(): Observable<Book[]> {
    const data = this.http.get<data>(this.url).pipe(
      tap((value) => console.log('damm', value)),
      map((value) => value.books)
    );
    return data;
  }
}
