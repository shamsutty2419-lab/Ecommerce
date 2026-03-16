import { Component, signal } from '@angular/core';
import { product } from '../../models/products';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
   <div class="bg-gray-100 p-6 h-full">
    <h1  class="text-2xl font-bold text-gray-900">{{category()}}</h1>
  </div>
  <div class="responsive-grid">
    @for (product of filteredProducts(); track  product.id) {
      <div class="bg-white cursor-pointer rounded-lg shadow-lg  ovwerflow-hidden flex flex-col h-full">
        <img [src]="product.imageUrl"  class="w-full h-[300px] object-cover rounded round-t-xl" />
        <div class="p-5 flex flex-col flex-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {{product.name}}
          </h3>
        </div>
  </div>
     }  
  </div>
  `,
  styles: ``,
})
export class ProductCard {
  category = signal('');
  filteredProducts = signal<product[]>([]);
}

