import { Component, effect, inject } from '@angular/core';
import { NgOptimizedImage, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { ProductsStore } from '../../products/data-access/products.store';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    RouterLink,
    MatButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  template: `
    <main class="max-w-[1200px] mx-auto px-4 py-6 space-y-6">
      <section class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="space-y-1">
          <h1 class="text-2xl font-semibold">Modern Store</h1>
          <p class="text-sm text-gray-500">
            Discover carefully curated products across clothing, electronics, home and more.
          </p>
        </div>

        <form
          class="w-full max-w-sm"
          (ngSubmit)="$event.preventDefault()"
        >
          <mat-form-field appearance="outline">
            <mat-label>Search products</mat-label>
            <input
              matInput
              type="search"
              [value]="searchTerm()"
              (input)="onSearchChange($any($event.target).value)"
              placeholder="Search by name or description"
            />
          </mat-form-field>
        </form>
      </section>

      <section class="flex flex-wrap gap-2">
        @for (c of categories; track c.value) {
          <button
            mat-button
            [class.bg-primary-container]="activeCategory() === c.value"
            [class.text-primary]="activeCategory() === c.value"
            (click)="onCategoryChange(c.value)"
          >
            {{ c.label }}
          </button>
        }
      </section>

      <section>
        @if (products().length === 0) {
          <div class="text-sm text-gray-500">
            No products found. Try a different search or category.
          </div>
        } @else {
          <div class="responsive-grid">
            @for (product of products(); track product.id) {
              <a
                mat-card
                class="block overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:shadow-md"
                [routerLink]="['/product', product.id]"
              >
                <img
                  [ngSrc]="product.imageUrl"
                  [alt]="product.name"
                  width="400"
                  height="300"
                  class="h-56 w-full object-cover"
                />

                <div class="p-4 space-y-2">
                  <div class="flex items-start justify-between gap-3">
                    <h2 class="text-sm font-medium line-clamp-2">
                      {{ product.name }}
                    </h2>
                    <span class="text-sm font-semibold">
                      {{ product.price | currency : 'USD' : 'symbol' : '1.0-0' }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between text-xs text-gray-500">
                    <span class="flex items-center gap-1">
                      <mat-icon class="small text-amber-500">star</mat-icon>
                      {{ product.rating }} • {{ product.reviewsCount }} reviews
                    </span>
                    <span class="capitalize">{{ product.category }}</span>
                  </div>

                  <button
                    mat-button
                    color="primary"
                    class="mt-2 w-full justify-center"
                  >
                    View details
                  </button>
                </div>
              </a>
            }
          </div>
        }
      </section>
    </main>
  `,
})
export default class ProductsGrid {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly store = inject(ProductsStore);

  readonly categories = [
    { label: 'All', value: 'all' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Home', value: 'home' },
    { label: 'Accessories', value: 'accessories' },
  ];

  readonly activeCategory = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('category') ?? 'all')),
    { initialValue: 'all' },
  );

  readonly searchTerm = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('search') ?? '')),
    { initialValue: '' },
  );

  readonly products = this.store.filteredProducts;

  constructor() {
    effect(() => {
      this.store.setCategory(this.activeCategory());
      this.store.setSearch(this.searchTerm());
    });
  }

  onCategoryChange(category: string) {
    this.router.navigate(['products', category], {
      queryParamsHandling: 'preserve',
    });
  }

  onSearchChange(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: value || null },
      queryParamsHandling: 'merge',
    });
  }
}

