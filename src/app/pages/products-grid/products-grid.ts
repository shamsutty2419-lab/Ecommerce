import { Component, computed, input, Input, signal } from '@angular/core';
import { product } from '../../models/products';

@Component({
  selector: 'app-products-grid',
  imports: [],
  template: ` <div class="bg-gray-100 p-6 h-full">
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
export default class ProductsGrid {

  category = input<string>('all');

  products = signal<product[]>([
    //electrocics
    { 
    id: 1 ,
    name: 'Smartphone',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
     { 
    id: 2 ,
    name: 'Laptop',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://m.media-amazon.com/images/I/61IDcxw27+L.jpg',
  },
       { 
    id: 3 ,
    name: 'fan',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://rukminim2.flixcart.com/image/3072/3072/xif0q/fan/i/b/j/renesa-pedestal-swing-decor-35-1-bldc-pedestal-fan-400-atomberg-original-imahjzh9zfamwgsv.jpeg?q=90',
  },
      { 
    id: 4 ,
    name: 'mixer',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://m.media-amazon.com/images/I/71PIpuPlq3L._SX679_.jpg',
  },
      { 
    id: 5 ,
    name: 'camera',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://m.media-amazon.com/images/I/51NR+Auf92L._SY300_SX300_QL70_FMwebp_.jpg',
  },
      { 
    id: 6 ,
    name: 'projector',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRInu3g7h8_lYiOmEIlLwZtfZRdq2zuje2TFh0NHptAaTOObf5I6xYA2AkQTxiu_5C4copr0bo1QJ2oxIugSk8UdfApRTC841FS9S0k6OltxeqwaagDa7QpZfiMz6iKHzreufUYeXVMtg&usqp=CAc',
  },
      { 
    id: 7 ,
    name: 'tv',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmjp_nQACefcB4GXeY9qA69vk5FxCXZsmbxByHXCtRSxtZax7xQfRIpAlxwOr9HW52nxD8dLRWOQ35eU92gEbBUN0ze_fdaZ2tmg0lYYj7tF6h-iZf7iKyG1FzelNwunA1tO-NJ482BQ&usqp=CAc',
  },
      { 
    id: 8 ,
    name: 'airpods',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFwaYiZwcYZXBUgi1wUIJBfCk6M42dSHWRyjFUK7q5Qn3UKA6s4YkRwmilTNXUWoc38WjRCBAyrQNEY9bGfKSwbbbVZs1pq3spAmhvyrrQanRodOGH6qBs8-BGjBx56EYzDGTlig&usqp=CAc',
  },
      { 
    id: 9 ,
    name: 'power bank',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOnUJl9PFgPbWppexrb-_INpLY9uJ4RVeXb2dKkHfieOB2bxPH5VZvNvr2UtYXylnGAD7qgBUiUkDwp_3lefBWdoknoCgWsHUpJVrx-dTUVF_33rfyVz-qMfg',
  },
      { 
    id: 10 ,
    name: 'headphones',
    price: 19.99,
    category: 'electronics',
    inStock: true,
    rating: 4.5,
    reviews: 10,
    imageUrl:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLPl2ibRGQXHPprVatMxFS2REhW2L69u4H_WzPuLBRjIrdN0TjYHcYml16iobI2jfeEWCPa1z0swszEjDDwTUiA2iZn0auNXXFCNzcfxX3bpCw2EWCHtuo9hcU',
  },


    
  ]);
  filteredProducts = computed(() => this.products().filter(p => p.category.toLocaleLowerCase() === 
    this.category().toLocaleLowerCase())
  );
}
