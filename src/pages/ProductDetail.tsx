import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Palette, Leaf, Truck } from "lucide-react";
import { products, Product } from "@/data/products";
import ScrollAnimation from "@/components/ScrollAnimation";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const currentColor = product.colors[selectedColor];
  const currentImages = currentColor.images;

  const handleColorChange = (colorIndex: number) => {
    setSelectedColor(colorIndex);
    setSelectedImageIndex(0);
  };

  const handleAddToCart = () => {
    if (!product.available) {
      alert('Ovaj proizvod trenutno nije dostupan.');
      return;
    }
    if (!currentColor.available) {
      alert('Ova boja trenutno nije dostupna.');
      return;
    }
    // This would integrate with your cart system
    console.log('Adding to cart:', product, currentColor);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na početnu
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <ScrollAnimation animationType="scale-in">
              <div className="aspect-square overflow-hidden rounded-lg border border-border">
                <img
                  src={currentImages[selectedImageIndex]}
                  alt={`${product.name} - ${currentColor.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Image Thumbnails */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {currentImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-primary' 
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <ScrollAnimation animationType="fade-up">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                  {!product.available && (
                    <Badge variant="destructive" className="ml-3">
                      Trenutno nije dostupno
                    </Badge>
                  )}
                </h1>
                <p className="text-2xl font-bold text-primary mb-4">
                  {product.price.toLocaleString('sr-RS')} RSD
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            </ScrollAnimation>

            {/* Color Selection */}
            <ScrollAnimation animationType="fade-up" delay={200}>
              <div>
                <h3 className="text-lg font-semibold mb-3">Dostupne boje:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorChange(index)}
                      disabled={!color.available}
                      className={`px-4 py-2 rounded-lg border transition-colors relative ${
                        selectedColor === index
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:border-accent'
                      } ${
                        !color.available ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {color.name}
                      {!color.available && (
                        <span className="absolute top-0 right-0 text-xs text-muted-foreground">
                          (nedostupno)
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Product Features */}
            <ScrollAnimation animationType="fade-up" delay={300}>
              <div>
                <h3 className="text-lg font-semibold mb-3">Karakteristike:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Product Details */}
            <ScrollAnimation animationType="fade-up" delay={400}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Detalji proizvoda</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Materijal:</span>
                      <span className="font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimenzije:</span>
                      <span className="font-medium">{product.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Boja:</span>
                      <span className="font-medium">{currentColor.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Add to Cart */}
            <ScrollAnimation animationType="fade-up" delay={500}>
              <div className="sticky bottom-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4">
                {!product.available ? (
                  <Button
                    disabled
                    size="lg"
                    className="w-full flex items-center gap-2"
                  >
                    Trenutno nije dostupno
                  </Button>
                ) : !currentColor.available ? (
                  <Button
                    disabled
                    size="lg"
                    className="w-full flex items-center gap-2"
                  >
                    Ova boja trenutno nije dostupna
                  </Button>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full bg-primary hover:bg-accent text-primary-foreground flex items-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Dodaj u korpu - {product.price.toLocaleString('sr-RS')} RSD
                  </Button>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Related Products or Additional Info */}
        <ScrollAnimation animationType="fade-up" delay={600}>
          <div className="mt-16">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Zašto odabrati naše proizvode?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Ručno izrađeno</h4>
                    <p className="text-sm text-muted-foreground">
                      Svaki proizvod je pažljivo ručno izrađen od strane iskusnih majstora
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Ekološki materijali</h4>
                    <p className="text-sm text-muted-foreground">
                      Koristimo samo prirodne i ekološki prihvatljive materijale
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Brza dostava</h4>
                    <p className="text-sm text-muted-foreground">
                      Dostavljamo u roku od 2-3 radna dana širom Srbije
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ProductDetail;