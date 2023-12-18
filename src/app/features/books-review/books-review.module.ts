import { NgModule } from '@angular/core';
import { BooksReviewComponent } from './components/books-review.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BooksReviewComponent],
  imports: [CommonModule],
  exports: [BooksReviewComponent],
})
export class BooksReviewModule {}
