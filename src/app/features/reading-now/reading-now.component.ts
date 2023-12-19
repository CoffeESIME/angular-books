import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { DataService } from 'src/app/services/data.service';
import { BookCardComponent } from './book-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading-now',
  standalone: true,
  templateUrl: './reading-now.component.html',
  styleUrls: ['./reading-now.component.css'],
  imports: [BookCardComponent, CommonModule]
})
export class ReadingNowComponent implements OnInit {
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
