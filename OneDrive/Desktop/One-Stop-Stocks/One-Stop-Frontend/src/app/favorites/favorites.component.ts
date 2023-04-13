import { Component } from '@angular/core';
import { StockAPIService } from '../stock-api.service';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  faves: Favorite[] = [];
  constructor(private api: StockAPIService) {}

  ngOnInit(): void {
  
    this.loadFaves();
    
  }

  loadFaves(): void {
      
    this.api.getAllFave().subscribe((data: Favorite[]) => {
      this.faves = data;
    });
   
  };

  deleteFave(fave: Favorite): void{

    this.api.removeFave(fave.ticker).subscribe(() => 
    this.loadFaves());
    };
}
