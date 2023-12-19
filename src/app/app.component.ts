import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, concat } from 'rxjs';
import { Book } from './models/book.model';
import { DataService } from './services/data.service';

interface data {
  status: string;
  total: number;
  books: Book[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  //public http: HttpClient = inject(HttpClient);
  public title: string = 'bases';
  //  public books: Book[] = [];
  //constructor(private dataService:DataService){}
  //  ngOnInit(): void {
  //      this.dataService.getData().subscribe(data=> { this.books=data}, error=> console.log)
  //  }
  //example for on component
  // ngOnInit() {
  //   console.log('here petition');
  //   this.http
  //     .get<data>('https://www.dbooks.org/api/search/python')
  //     .pipe(
  //       tap((x) => console.log('antes', x)),
  //       map((data) => data?.books)
  //     )
  //     .subscribe((data) => {
  //       this.books=data
  //       console.log(data);
  //     });
  // }
}
