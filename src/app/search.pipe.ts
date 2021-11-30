import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './ProductDetails';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(productNames: Product[], searchInput: string): Product[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return productNames.filter(
           x =>x.name?.toLowerCase().includes(searchInput)
       )
     }
}