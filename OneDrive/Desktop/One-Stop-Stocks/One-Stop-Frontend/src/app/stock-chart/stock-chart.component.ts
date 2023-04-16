import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StockAPIService } from '../list-of-stocks/services/stock-api.service';
import { Stock } from '../interfaces/Stock';
import { Favorite } from '../interfaces/favorite';
//import { Chart } from 'chart.js';


@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {

  //private myChart: Chart | null = null;

  stocks: Stock[] = [];
  favorites: Favorite[] = [];
  top50: Stock[] = [];

  constructor(private api: StockAPIService) { }

  ngOnInit(): void {
    this.api.getAllStocks().subscribe((data: Stock[]) => {
      this.stocks = data;
      this.top50 = this.getTop50();
    });

    this.api.getAllFave().subscribe((data: Favorite[]) => {
      this.favorites = data;
    });
  }

  getTop50(): Stock[] {
    return this.stocks.sort((a, b) => {
      return b.sentiment_score - a.sentiment_score;
    }).slice(0, 50);
  }

  isFavorited(ticker: string): boolean {
    return this.favorites.findIndex(f => f.ticker === ticker) !== -1;
  }

  toggleFavorite(stock: Stock): void {
    const favorite: Favorite = {
      no_of_comments: stock.no_of_comments,
      sentiment: stock.sentiment,
      sentiment_score: stock.sentiment_score,
      ticker: stock.ticker
    };

    if (this.isFavorited(stock.ticker)) {
      this.api.removeFave(stock.ticker).subscribe(() => {
        this.favorites = this.favorites.filter(f => f.ticker !== stock.ticker);
      });
    } else {
      this.api.addFavorite(favorite).subscribe((data: Favorite) => {
        this.favorites.push(data);
      });
    }
  }

 // ngAfterViewInit() {
 //   const canvas = document.getElementById('myChart') as HTMLCanvasElement;
 ///   const ctx = canvas.getContext('2d');
 //   if (ctx) {
  //    const myChart = new Chart(ctx, {
  //      type: 'line',
   //     data: {
  //        labels: ['Today', 'Yesterday', 'last Week'],
  //        datasets: [{
  //          label: 'My First Dataset',
  //          data: [65, 59, 80, 81, 56, 55, 40],
  //          fill: false,
  //          borderColor: 'rgb(75, 192, 192)',
  //          tension: 0.1
  //        }]
  //      }
  //    });
 //   } else {
 //     console.log('Canvas element not found');
 //   }
//  }
}
  