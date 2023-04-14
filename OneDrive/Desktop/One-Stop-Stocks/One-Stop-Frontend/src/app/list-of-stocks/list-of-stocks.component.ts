import { Component } from '@angular/core';
import { Stock } from '../interfaces/Stock';
import { StockAPIService } from './services/stock-api.service';
import { Favorite } from '../interfaces/favorite';

@Component({
  selector: 'app-list-of-stocks',
  templateUrl: './list-of-stocks.component.html',
  styleUrls: ['./list-of-stocks.component.css']
})
export class ListOfStocksComponent {
  stocks: Stock[] = [];
  fave: Favorite = ({} as any) as Favorite;
  eD: Stock | undefined; 

  constructor(private api: StockAPIService) {}
  
    ngOnInit(): void {
  
      this.loadStocks();
      
    }

    loadStocks(): void {
      
      this.api.getAllStocks().subscribe((data: Stock[]) => {
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
