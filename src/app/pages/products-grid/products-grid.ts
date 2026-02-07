import { Component, computed, Input, signal } from '@angular/core';
import { product } from '../../models/products';

@Component({
  selector: 'app-products-grid',
  imports: [],
  template: ` <div class="bg-gray-100 p-6">
    <h1  class="text-2xl font-bold text-gray-900">catagory</h1>~
  </div>
    
  `,
  styles: ``,
})
export default class ProductsGrid {
  @Input() category = signal<string>('all');
  products = signal<product[]>([
  ]);
  filteredProducts = computed(() => this.products().filter(p => 
    this.category().toLocaleLowerCase()
  ));
}
