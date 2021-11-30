import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './ProductDetails';
@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform {
    transform(productPrice: Product[], searchInput: string): Product[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return productPrice.filter(
           x =>x.price?.toString().toLowerCase().includes(searchInput)
       )
     }
}