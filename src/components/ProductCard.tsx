import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden border-0">
      <Link to={`/proizvod/${product.slug}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <Link to={`/proizvod/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 text-foreground hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {product.price.toLocaleString('sr-RS')} RSD
          </span>
          {!product.available ? (
            <Button 
              disabled
              className="bg-muted text-muted-foreground cursor-not-allowed"
            >
              Nije dostupno
            </Button>
          ) : (
            <Button 
              onClick={() => onAddToCart(product)}
              className="bg-primary hover:bg-accent text-primary-foreground"
            >
              Dodaj u korpu
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;