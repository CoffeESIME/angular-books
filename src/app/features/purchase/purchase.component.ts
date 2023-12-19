import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseComponent implements OnInit {
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
