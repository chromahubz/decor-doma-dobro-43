import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProductCard from "@/components/ProductCard";
import CheckoutForm from "@/components/CheckoutForm";
import ScrollAnimation from "@/components/ScrollAnimation";
import { products, Product } from "@/data/products";
import { Link } from "react-router-dom";
import { Leaf, Shield, Truck, Heart } from "lucide-react";
import heroImage from "@/assets/hero-decor.jpg";

const Index = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Listen for cart events from product detail pages
  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const { product } = event.detail;
      setSelectedProducts(prev => {
        if (prev.find(p => p.id === product.id)) {
          return prev;
        }
        return [...prev, product];
      });
    };

    window.addEventListener('addToCart', handleAddToCart as EventListener);
    return () => {
      window.removeEventListener('addToCart', handleAddToCart as EventListener);
    };
  }, []);

  const handleAddToCart = (product: Product) => {
    setSelectedProducts(prev => {
      if (prev.find(p => p.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleCheckout = () => {
    if (selectedProducts.length === 0) return;
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollAnimation animationType="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Zeleni Dom
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Otkrijte prelepu kolekciju vaza, figurina i dekorativnih predmeta za biljke
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="scale-in" delay={400}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Istražite Kolekciju
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animationType="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Pretvorite Svoj Dom u Oazu Mira
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-16">
              Naša kolekcija elegantnih vaza, figurina i dekorativnih predmeta za biljke 
              je pažljivo odabrana da unese prirodnu lepotu i harmoniju u vaš životni prostor. 
              Svaki komad je kreiran sa pažnjom prema detaljima i dizajniran da se savršeno 
              uklopi u moderni dom.
            </p>
          </ScrollAnimation>

          {/* Why Choose Our Products Section */}
          <ScrollAnimation animationType="fade-up" delay={400}>
            <h3 className="text-3xl font-bold mb-12 text-foreground">
              Zašto odabrati naše proizvode?
            </h3>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animationType="scale-in" delay={500}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Prirodni Materijali</h4>
                <p className="text-muted-foreground">Koristimo samo najbolje prirodne materijale za dugotrajnost i kvalitet.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="scale-in" delay={600}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Garancija Kvaliteta</h4>
                <p className="text-muted-foreground">Svi proizvodi prolaze rigoroznu kontrolu kvaliteta pre isporuke.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="scale-in" delay={700}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Brza Dostava</h4>
                <p className="text-muted-foreground">Garantujemo brzu i sigurnu dostavu direktno na vašu adresu.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="scale-in" delay={800}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ručno Pravljeno</h4>
                <p className="text-muted-foreground">Svaki proizvod je jedinstveno ručno izrađen sa pažnjom prema detaljima.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Shopping Cart Summary */}
      {selectedProducts.length > 0 && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-card border border-border rounded-lg p-4 shadow-lg max-w-sm">
            <h3 className="font-semibold mb-2">Izabrani proizvodi ({selectedProducts.length})</h3>
            <div className="max-h-40 overflow-y-auto space-y-2 mb-4">
              {selectedProducts.map((product) => (
                <div key={product.id} className="flex justify-between items-center text-sm">
                  <span className="truncate flex-1 mr-2">{product.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{product.price.toLocaleString('sr-RS')} RSD</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveFromCart(product.id)}
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
                  {selectedProducts.reduce((sum, p) => sum + p.price, 0).toLocaleString('sr-RS')} RSD
                </span>
              </div>
            </div>
            <Button onClick={handleCheckout} className="w-full bg-primary hover:bg-accent">
              Kupi Sada
            </Button>
          </div>
        </div>
      )}

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationType="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
              Naša Kolekcija
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground text-center mb-8">
              Otkrijte našu pažljivo odabranu kolekciju proizvoda
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, 6).map((product, index) => (
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
          
          <ScrollAnimation animationType="fade-up" delay={600}>
            <div className="text-center">
              <Link to="/proizvodi">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-4">
                  VIDI SVE
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <ScrollAnimation animationType="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Spremni da Transformišete Svoj Prostor?
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl mb-8">
              Izaberite savršene komade koji će doneti prirodnu eleganciju u vaš dom.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="scale-in" delay={400}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Započnite Kupovinu
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Zeleni Dom</h3>
          <p className="text-lg mb-6">
            Dekoracija koja donosi prirodu u vaš dom
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Kontakt</h4>
              <p>Email: info@zelenidom.rs</p>
              <p>Telefon: +381 11 123 4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Adresa</h4>
              <p>Knez Mihailova 15</p>
              <p>11000 Beograd, Srbija</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Radno vreme</h4>
              <p>Pon - Pet: 09:00 - 18:00</p>
              <p>Sub: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
      </footer>

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
  );
};

export default Index;