import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { BookComponent } from './results/book/book.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    BookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
