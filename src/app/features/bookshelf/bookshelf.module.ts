import { NgModule} from '@angular/core';
import { BookCardComponent } from './components/book-card.component';
import { BookshelfComponent } from './components/bookshelf.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [BookCardComponent, BookshelfComponent],
  imports:[CommonModule],
  exports: [BookshelfComponent],
})
export class BookshelfModule {
}
