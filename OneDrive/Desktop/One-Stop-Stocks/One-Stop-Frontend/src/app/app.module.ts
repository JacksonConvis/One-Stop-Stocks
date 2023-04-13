import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfStocksComponent } from './list-of-stocks/list-of-stocks.component';




@NgModule({
  declarations: [
    AppComponent,
    ListOfStocksComponent,
 
  ],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }