import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Layout from "@/components/Layout";
import ScrollAnimation from "@/components/ScrollAnimation";
import CheckoutForm from "@/components/CheckoutForm";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { selectedProducts, cartItems, removeFromCart, updateQuantity, getTotalQuantity, getTotalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sr-RS', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutOpen(true);
  };

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return `<h2 key=${index} class="text-2xl font-bold text-foreground mt-8 mb-4">${paragraph.slice(3)}</h2>`;
        }
        if (paragraph.startsWith('### ')) {
          return `<h3 key=${index} class="text-xl font-semibold text-foreground mt-6 mb-3">${paragraph.slice(4)}</h3>`;
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return `<p key=${index} class="text-lg font-semibold text-foreground mb-4">${paragraph.slice(2, -2)}</p>`;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          const listItems = items.map(item => `<li class="mb-1">${item.slice(2)}</li>`).join('');
          return `<ul key=${index} class="list-disc list-inside text-muted-foreground mb-4 space-y-1">${listItems}</ul>`;
        }
        if (paragraph.trim()) {
          return `<p key=${index} class="text-muted-foreground mb-4 leading-relaxed">${paragraph}</p>`;
        }
        return '';
      })
      .join('');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Shopping Cart Summary */}
        {cartItems.length > 0 && (
          <div className="fixed top-4 right-4 z-[100]">
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

        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Nazad na blog
            </Button>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <ScrollAnimation animationType="fade-up">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-lg text-muted-foreground italic">{post.excerpt}</p>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Podeli
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Featured Image */}
          <ScrollAnimation animationType="scale-in" delay={200}>
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation animationType="fade-up" delay={400}>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </ScrollAnimation>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4">
              <ScrollAnimation animationType="fade-up">
                <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                  Povezani članci
                </h2>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <ScrollAnimation
                    key={relatedPost.id}
                    animationType="scale-in"
                    delay={index * 100}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <span>{formatDate(relatedPost.date)}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <Link to={`/blog/${relatedPost.slug}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Čitaj više
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimation animationType="fade-up">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ne propustite nove članke
              </h2>
              <p className="text-muted-foreground mb-8">
                Prijavite se za naš newsletter i budite prvi koji će saznati za najnovije savete o dekoraciji.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Vaša email adresa"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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

export default BlogPost;