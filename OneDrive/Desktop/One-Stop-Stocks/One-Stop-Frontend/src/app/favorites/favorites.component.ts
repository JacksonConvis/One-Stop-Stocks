import { Component } from '@angular/core';
import { StockAPIService } from '../services/stock-api.service';
import { Favorite } from '../interfaces/favorite';
import { Stock } from '../interfaces/Stock';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  faves: Favorite[] = [];
  eD: Stock | undefined;
  constructor(private api: StockAPIService) {}

  ngOnInit(): void {
  
    this.loadFaves();
    
  }

  loadFaves(): void {
      
    this.api.getAllFave().subscribe((data: Favorite[]) => {
      this.faves = data;
    });
   
  };

  showDetails(i: number){

    this.eD = this.faves.at(i);
   };




  deleteFave(fave: Favorite): void{

    this.api.removeFave(fave.ticker).subscribe(() => 
    this.loadFaves());
    };
}
