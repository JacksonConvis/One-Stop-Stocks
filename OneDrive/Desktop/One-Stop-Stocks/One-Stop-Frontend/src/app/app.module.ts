import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListOfStocksComponent } from './list-of-stocks/list-of-stocks.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { YesterdayStocksComponent } from './yesterday-stocks/yesterday-stocks.component';
import { LastWeekComponent } from './last-week/last-week.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { UserComponent } from './user/user.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';


const routes: Routes = [
  {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'},
  { path: 'user', component: UserComponent },
  { path: 'faves', component: FavoritesComponent },
  { path: 'stocks', component: ListOfStocksComponent },
  { path: 'yesterday', component: YesterdayStocksComponent },
  {path: 'lastweek', component: LastWeekComponent}, 
  {path: 'user-list', component: ListOfUsersComponent},
  { path: 'stock-chart', component: StockChartComponent }

  
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfStocksComponent,
    FavoritesComponent,
    YesterdayStocksComponent,
    LastWeekComponent,
    StockChartComponent,
    UserComponent,
    ListOfUsersComponent,
 
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes),IonicModule.forRoot()],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }