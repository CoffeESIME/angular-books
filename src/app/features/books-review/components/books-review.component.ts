import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books-review',
  templateUrl: `./books-review.component.html`,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BooksReviewComponent {
  public dataBooks: Book[] | null = null;
  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.dataBooks = data;
        this.cd.detectChanges();
      },
      (error) => console.error(error)
    );
  }
}
