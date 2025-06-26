'use client';

import * as React from 'react';
import { products as initialProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/product-card';
import { ProductFilters } from '@/components/product-filters';

export default function Home() {
  const [products] = React.useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortBy, setSortBy] = React.useState('alphabetical');

  const filteredAndSortedProducts = React.useMemo(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'alphabetical':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [products, searchTerm, sortBy]);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">
            Apna Bazaar
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Your one-stop shop for the best products.
          </p>
        </header>

        <ProductFilters
          onSearchChange={setSearchTerm}
          onSortChange={setSortBy}
          sortValue={sortBy}
        />

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No results found 🙁
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
