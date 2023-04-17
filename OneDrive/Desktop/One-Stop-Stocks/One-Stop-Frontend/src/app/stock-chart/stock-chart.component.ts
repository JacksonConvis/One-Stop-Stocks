import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StockAPIService } from '../list-of-stocks/services/stock-api.service';
import { Stock } from '../interfaces/Stock';
import { Favorite } from '../interfaces/favorite';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit, AfterViewInit {

  @ViewChild('myChart')
  myChart!: ElementRef;

  stocks: Stock[] = [];
  favorites: Favorite[] = [];
  top50: Stock[] = [];

  constructor(private api: StockAPIService) { }

  ngAfterViewInit(): void {
    this.api.getAllStocks().subscribe((data: Stock[]) => {
      this.stocks = data;
      this.top50 = this.getTop50();
      this.createLineChart();
    });
  }

  ngOnInit(): void {
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

  createLineChart(): void {
    Chart.register(...registerables);

    const labels: string[] = this.top50.map(s => s.ticker);
    const data: number[] = this.top50.map(s => s.sentiment_score);

    const chart = new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Sentiment Score',
          data: data,
          borderColor: 'blue',
         
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Top 50 Stocks by Sentiment Score'
          }
        }
      }
    });
  }
}
