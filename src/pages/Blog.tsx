import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ScrollAnimation from "@/components/ScrollAnimation";
import Layout from "@/components/Layout";
import CheckoutForm from "@/components/CheckoutForm";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("sve");
  const [currentPage, setCurrentPage] = useState(1);
  const { selectedProducts, cartItems, removeFromCart, updateQuantity, getTotalQuantity, getTotalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const postsPerPage = 6;

  // Get unique categories
  const categories = ["sve", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "sve" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sr-RS', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutOpen(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation animationType="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Dekor Blog
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animationType="fade-up" delay={200}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Otkrijte najnovije trendove u dekoraciji, savete za uređenje doma i
                inspirativne ideje za kreiranje savršenog prostora.
              </p>
            </ScrollAnimation>
          </div>
        </section>

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

        {/* Search and Filter */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Pretražite članke..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className="capitalize"
                  >
                    {category === "sve" ? "Sve kategorije" : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nema rezultata za vašu pretragu.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post, index) => (
                  <ScrollAnimation
                    key={post.id}
                    animationType="scale-in"
                    delay={index * 100}
                  >
                    <Link to={`/blog/${post.slug}`} className="block h-full">
                      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full cursor-pointer flex flex-col">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6 flex flex-col flex-1">
                          {/* Category Badge */}
                          <Badge variant="secondary" className="w-fit mb-3">
                            {post.category}
                          </Badge>

                          {/* Title - Fixed height */}
                          <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors h-14">
                            {post.title}
                          </h2>

                          {/* Excerpt - Fixed height */}
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 h-16">
                            {post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>

                          {/* Author */}
                          <div className="flex items-center gap-2 mb-4">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{post.author}</span>
                          </div>

                          {/* Read More Button */}
                          <div className="mt-auto">
                            <Button className="w-full" variant="outline">
                              Čitaj više
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScrollAnimation>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Prethodna
                    </Button>

                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                          className="w-10 h-10 p-0"
                        >
                          {page}
                        </Button>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Sledeća
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation animationType="fade-up">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Prijavite se za newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Budite prvi koji će saznati za nove članke, savete i trendove u dekoraciji.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Vaša email adresa"
                  type="email"
                  className="flex-1"
                />
                <Button className="sm:w-auto">
                  Prijaviti se
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

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

export default Blog;