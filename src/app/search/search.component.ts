import { Component, OnInit } from '@angular/core';
import { Product } from '../ProductDetails';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public searchInput!: string;
    tempVar: boolean = false;

    products: Product[] = [
      {
        name: "Samsang",
        category:'category',
        price:400
    },
    {
        name: "Nokia",
        category:'category',
        price:500
    }
    ];
    searchProducts!: Product[];

    
    constructor() { 
      this.searchProducts = this.products;
    }

    search() {
      const searchPipe = new SearchPipe();
      this.searchProducts = searchPipe.transform(this.products, this.searchInput);
      console.log("hello + " +  this.searchProducts[0].name);

    }

    ngOnInit(): void {
      
    }

    toggleFacet(): void {
      console.log("test");
      this.tempVar=!this.tempVar;
    }

}
