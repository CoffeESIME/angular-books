import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksReviewModule } from './features/books-review/books-review.module';
import { PurchaseComponent } from './features/purchase/purchase.component';
import { BookshelfModule } from './features/bookshelf/bookshelf.module';
import { ReadingNowComponent } from './features/reading-now/reading-now.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './features/user/user.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes= [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ReadingNowComponent},
  {path: 'try', component: UserComponent},
  {path: 'all',component: HomeComponent, pathMatch: 'full' }
]
@NgModule({
  declarations: [AppComponent,],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BooksReviewModule,
    PurchaseComponent,
    BookshelfModule,
    ReadingNowComponent,
    BookshelfModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
