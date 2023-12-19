import { NgModule } from '@angular/core';
import { BooksReviewComponent } from './components/books-review.component';
import { CommonModule } from '@angular/common';
import { BookReviewComponent } from './components/book-review.component';

@NgModule({
  declarations: [BooksReviewComponent, BookReviewComponent],
  imports: [CommonModule],
  exports: [BooksReviewComponent],
})
export class BooksReviewModule {}
