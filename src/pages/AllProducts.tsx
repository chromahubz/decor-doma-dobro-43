import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProductCard from "@/components/ProductCard";
import CheckoutForm from "@/components/CheckoutForm";
import ScrollAnimation from "@/components/ScrollAnimation";
import Layout from "@/components/Layout";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AllProducts = () => {
  const { selectedProducts, cartItems, addToCart, removeFromCart, updateQuantity, getTotalQuantity, getTotalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Listen for cart events from product detail pages
  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const { product } = event.detail;
      addToCart(product);
    };

    window.addEventListener('addToCart', handleAddToCart as EventListener);
    return () => {
      window.removeEventListener('addToCart', handleAddToCart as EventListener);
    };
  }, [addToCart]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };


  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutOpen(true);
  };

  return (
    <Layout>
      <div className="bg-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Nazad na početnu</span>
            </Link>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">Svi Proizvodi</h1>
              <p className="text-muted-foreground">Kompletna kolekcija naših proizvoda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Cart Summary */}
      {cartItems.length > 0 && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-card border border-border rounded-lg p-4 shadow-lg max-w-sm">
            <h3 className="font-semibold mb-2">Izabrani proizvodi ({getTotalQuantity()})</h3>
            <div className="max-h-40 overflow-y-auto space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-sm">
                  <span className="truncate flex-1 mr-2">{item.product.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-6 w-6 p-0"
                      >
                        -
                      </Button>
                      <span className="text-xs w-6 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-6 w-6 p-0"
                      >
                        +
                      </Button>
                    </div>
                    <span className="font-medium">{(item.product.price * item.quantity).toLocaleString('sr-RS')} RSD</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                      className="h-6 w-6 p-0"
                    >
                      ×
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-2 mb-3">
              <div className="flex justify-between font-bold">
                <span>Ukupno:</span>
                <span className="text-primary">
                  {getTotalPrice().toLocaleString('sr-RS')} RSD
                </span>
              </div>
            </div>
            <Button onClick={handleCheckout} className="w-full bg-primary hover:bg-accent">
              Kupi Sada
            </Button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollAnimation 
              key={product.id} 
              animationType="scale-in" 
              delay={index * 100}
            >
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
              />
            </ScrollAnimation>
          ))}
        </div>
      </main>

      {/* Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
          </DialogHeader>
          <CheckoutForm
            selectedProducts={selectedProducts}
            onClose={() => setIsCheckoutOpen(false)}
          />
        </DialogContent>
      </Dialog>
      </div>
    </Layout>
  );
};

export default AllProducts;