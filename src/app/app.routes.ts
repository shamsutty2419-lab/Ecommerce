import { Routes } from '@angular/router';
// import { ProductsGrid } from './pages/products-grid/products-grid';

export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        redirectTo:'products'
    },
    
    {
    path: 'products',
    // component:ProductsGrid
    loadComponent: () => import('./pages/products-grid/products-grid')
    },

     {
    path: 'my-wishlist',
    // component:ProductsGrid
    loadComponent: () => import('./pages/my-wishlist/my-wishlist')
    
    }

];
