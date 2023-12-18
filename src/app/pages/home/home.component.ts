import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BooksReviewModule } from 'src/app/features/books-review/books-review.module';
import { BookshelfModule } from 'src/app/features/bookshelf/bookshelf.module';
import { PurchaseComponent } from 'src/app/features/purchase/purchase.component';
import { ReadingNowComponent } from 'src/app/features/reading-now/reading-now.component';
import { UserComponent } from 'src/app/features/user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReadingNowComponent,
    BookshelfModule,
    UserComponent,
    PurchaseComponent,
    BooksReviewModule,
  ],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
