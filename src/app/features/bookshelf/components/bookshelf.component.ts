import { Component } from "@angular/core";
import { Book } from "src/app/models/book.model";
import { DataService } from "src/app/services/data.service";

@Component({
    selector: 'app-bookshelf',
    templateUrl: './bookshelf.component.html',
    
})

export class BookshelfComponent {
    public dataBooks: Book[] = [];
    constructor(private dataService: DataService) {}
    ngOnInit(): void {
      this.dataService.getData().subscribe(
        (data) => (this.dataBooks = data),
        (error) => console.log
      );
    }
}