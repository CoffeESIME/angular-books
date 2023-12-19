import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-review',
  templateUrl: `./book-review.component.html`,
})
export class BookReviewComponent {
  @Input() book!: Book;
}
