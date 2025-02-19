import { Routes } from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksDetailPageComponent } from './books-detail-page/books-detail-page.component';

export const routes: Routes = [
    { path: '', component: BooksPageComponent },
    {path: 'book/:id', component: BooksDetailPageComponent}
];
