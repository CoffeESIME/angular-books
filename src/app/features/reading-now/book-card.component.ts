import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./reading-now.component.css'],
  standalone: true,
})
export class BookCardComponent {
  @Input() book!: Book;
}
