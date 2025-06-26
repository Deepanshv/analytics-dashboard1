import type { Product } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ProductCardProps = {
  product: Product;
};

const getHint = (name: string): string => {
  const words = name.toLowerCase().split(' ');
  if (words.length > 1) {
    return `${words[0]} ${words[1]}`;
  }
  return words[0] || 'product';
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden bg-card">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={getHint(product.name)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-2 font-headline text-xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <p className="text-2xl font-bold text-primary">₹{product.price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
}
