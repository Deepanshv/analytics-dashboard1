'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import type React from 'react';

type ProductFiltersProps = {
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
  sortValue: string;
};

export function ProductFilters({ onSearchChange, onSortChange, sortValue }: ProductFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="🔍 Search products..."
          className="pl-10"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
        />
      </div>
      <Select value={sortValue} onValueChange={onSortChange}>
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alphabetical">A-Z</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
