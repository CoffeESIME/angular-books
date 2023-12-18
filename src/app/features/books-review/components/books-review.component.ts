import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-books-review',
  templateUrl: `./books-review.component.html`,
  styleUrls: ['./books-review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksReviewComponent {}
