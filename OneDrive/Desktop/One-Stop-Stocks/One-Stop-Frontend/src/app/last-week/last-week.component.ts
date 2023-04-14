import { Component } from '@angular/core';
import { Stock } from '../interfaces/Stock';
import { Favorite } from '../interfaces/favorite';
import { StockAPIService } from '../list-of-stocks/services/stock-api.service';

@Component({
  selector: 'app-last-week',
  templateUrl: './last-week.component.html',
  styleUrls: ['./last-week.component.css']
})
export class LastWeekComponent {
  stocks: Stock[] = [];
  fave: Favorite = ({} as any) as Favorite;
  eD: Stock | undefined; 

  constructor(private api: StockAPIService) {}
  
    ngOnInit(): void {
  
      this.loadStocks();
      
    }

    loadStocks(): void {
      
      this.api.getLastWeek().subscribe((data: Stock[]) => {
        this.stocks = data;
      });
     
    };

    showDetails(i: number){

      this.eD = this.stocks.at(i);
     };


    makeFavorite(stock: Stock, fave: Favorite){
      fave.ticker = stock.ticker;   
      fave.no_of_comments = stock.no_of_comments;
      fave.sentiment = stock.sentiment;
      fave.sentiment_score = stock.sentiment_score;

      this.api.addFavorite(fave).subscribe(() => this.loadStocks());
    
    }
}