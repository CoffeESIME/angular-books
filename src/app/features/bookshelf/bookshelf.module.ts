import { NgModule, OnInit } from '@angular/core';
import { BookCardComponent } from './components/book-card.component';
import { BookshelfComponent } from './components/bookshelf.component';
import { DataService } from '../../services/data.service';
import { Book } from 'src/app/models/book.model';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [BookCardComponent, BookshelfComponent],
  imports:[CommonModule],
  exports: [BookshelfComponent],
})
export class BookshelfModule {

}
