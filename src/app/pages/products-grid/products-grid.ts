import { Component, computed, input, Input, signal } from '@angular/core';
import { product } from '../../models/products';

@Component({
  selector: 'app-products-grid',
  imports: [],
  template: ` <div class="bg-gray-100 p-6">
    <h1  class="text-2xl font-bold text-gray-900">{{category()}}</h1>
  </div>
  <div class="responsive-grid">
    @for (product of filteredProducts(); track  product.id) {
      <div class="bg-white cursor-pointer rounded-lg shadow-lg  ovwerflow-hidden flex flex-col h-full">
        <img [src]="product.imageUrl"  class="w-full h-[300px] object-cover rounded round-t-xl" />
  </div>
     }
  </div>
    
  `,
  styles: ``,
})
export default class ProductsGrid {

  category = input<string>('all');

  products = signal<product[]>([
    //electrocics
    { 
    id: 1 ,
    name: 'Product 1',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'',
  },


    
  ]);
  filteredProducts = computed(() => this.products().filter(p => p.category.toLocaleLowerCase() === 
    this.category().toLocaleLowerCase())
  );
}
