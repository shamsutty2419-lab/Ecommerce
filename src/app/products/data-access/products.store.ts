import { Injectable, computed } from '@angular/core';
import { signalStore, withComputed, withMethods, withState, patchState } from '@ngrx/signals';
import { Product } from '../../shared/models/product.model';
import { PRODUCTS_MOCK } from './products.mock';

type ProductsState = {
  products: Product[];
  category: string;
  search: string;
};

const initialState: ProductsState = {
  products: PRODUCTS_MOCK,
  category: 'all',
  search: '',
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products, category, search }) => ({
    filteredProducts: computed(() => {
      const currentCategory = category().toLowerCase();
      const term = search().toLowerCase().trim();

      return products().filter((p) => {
        const matchesCategory =
          currentCategory === 'all' || p.category.toLowerCase() === currentCategory;

        if (!term) {
          return matchesCategory;
        }

        const haystack = `${p.name} ${p.description ?? ''}`.toLowerCase();
        const matchesSearch = haystack.includes(term);

        return matchesCategory && matchesSearch;
      });
    }),
  })),
  withMethods((store) => ({
    setCategory(category: string) {
      patchState(store, { category });
    },
    setSearch(search: string) {
      patchState(store, { search });
    },
  })),
);

