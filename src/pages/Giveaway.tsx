import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Instagram, Gift, Crown, Sparkles, Star, Heart, Trophy, AlertCircle } from "lucide-react";
import { products } from "@/data/products";
import { submitGiveawayEntry, checkEmailExists } from "@/lib/supabase";

const Giveaway = () => {
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Giveaway products
  const giveawayProducts = [
    products.find(p => p.slug === "japanska-zen-basta"),
    products.find(p => p.slug === "vaza-art-deco"),
    products.find(p => p.slug === "vaza-honey")
  ].filter(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !acceptTerms) return;

    setIsLoading(true);
    setError(null);

    try {
      // Check if email already exists
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setError("Ovaj email je već prijavljen za giveaway!");
        return;
      }

      // Get user's IP address for tracking (optional)
      let ipAddress = '';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ipAddress = ipData.ip;
      } catch (ipError) {
        console.log('Could not get IP address:', ipError);
      }

      // Submit to Supabase
      await submitGiveawayEntry(email, ipAddress);

      setIsSubmitted(true);
      console.log("Giveaway submission successful:", { email, ipAddress });
    } catch (error) {
      console.error("Error submitting giveaway entry:", error);
      setError("Došlo je do greške prilikom prijave. Molimo pokušajte ponovo.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 flex items-center justify-center">
          <ScrollAnimation animationType="scale-in">
            <Card className="max-w-lg mx-4 p-8 text-center">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Uspešno ste se prijavili!
                </h2>
                <p className="text-muted-foreground">
                  Hvala vam što ste učestvovali u našem giveaway-u! Proverite vaš Instagram da završite sve korake za učešće.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="w-full">
                  Nazad na stranicu
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute bottom-32 right-32 w-12 h-12 bg-purple-400 rounded-full opacity-20"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <ScrollAnimation animationType="fade-up">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Gift className="w-20 h-20 text-purple-600 animate-bounce" />
                  <Sparkles className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2 animate-spin" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
                MEGA GIVEAWAY!
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={200}>
              <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
                Osvojite fantastičnu kolekciju dekorativnih proizvoda!
              </p>
              <div className="flex justify-center items-center gap-4 text-lg text-gray-600">
                <Crown className="w-6 h-6 text-yellow-500" />
                <span>Vrednost nagrada preko 20.000 RSD</span>
                <Crown className="w-6 h-6 text-yellow-500" />
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Animated Product Showcase */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollAnimation animationType="fade-up">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                Šta možete osvojiti?
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Tri neverojetna proizvoda čekaju svog novog vlasnika!
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {giveawayProducts.map((product, index) => (
                <ScrollAnimation
                  key={product?.id}
                  animationType="scale-in"
                  delay={index * 200}
                >
                  <Card className="group relative overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={product?.mainImage}
                        alt={product?.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <CardContent className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                        {product?.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product?.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-purple-600">
                          {product?.price.toLocaleString('sr-RS')} RSD
                        </span>
                        <div className="flex items-center gap-1">
                          <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
                          <span className="text-pink-500 font-semibold">GRATIS!</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollAnimation animationType="fade-up">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Kako da učestvujete?
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Instagram Steps */}
              <ScrollAnimation animationType="fade-up" delay={200}>
                <Card className="p-8 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <Instagram className="w-12 h-12" />
                    <h3 className="text-2xl font-bold">Instagram koraci</h3>
                  </div>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <span>Zapratite naš Instagram @dekorkuca</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <span>Zapratite naše partnere @partner1 i @partner2</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <span>Lajkujte giveaway objavu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <span>Ostavite komentar i tagujte 2 prijatelja</span>
                    </li>
                  </ul>
                </Card>
              </ScrollAnimation>

              {/* Website Steps */}
              <ScrollAnimation animationType="fade-up" delay={400}>
                <Card className="p-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <Gift className="w-12 h-12" />
                    <h3 className="text-2xl font-bold">Website koraci</h3>
                  </div>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <span>Unesite vaš email za kontakt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <span>Kliknite "Učestvuj u giveaway-u"</span>
                    </li>
                  </ul>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Entry Form */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4">
            <ScrollAnimation animationType="fade-up">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-purple-200">
                <CardContent className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      Prijavite se za giveaway!
                    </h2>
                    <p className="text-gray-600">
                      Završite Instagram korake i unesite vaš email ovde
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email adresa *
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null); // Clear error when user types
                        }}
                        placeholder="vas.email@primer.com"
                        className="w-full p-3 border-2 border-purple-200 focus:border-purple-500 transition-colors"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          checked={acceptTerms}
                          onCheckedChange={setAcceptTerms}
                          className="mt-1"
                          disabled={isLoading}
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                          Prihvatam uslove učešća u giveaway-u i potvrđujem da sam završio/la sve potrebne korake na Instagram-u
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-4 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={!email || !acceptTerms || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Prijavljujem...
                        </>
                      ) : (
                        <>
                          <Gift className="w-5 h-5 mr-2" />
                          Učestvuj u Giveaway-u!
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="text-center text-sm text-gray-500 mt-6">
                    <p>Giveaway traje do 31. septembra 2025.</p>
                    <p>Pobednik će biti objavljen 1. oktobra 2025.</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimation animationType="fade-up">
              <h2 className="text-4xl font-bold mb-4">
                Srećno svima!
              </h2>
              <p className="text-xl mb-8">
                Ne zaboravite da završite sve korake na Instagram-u da biste bili u trci za nagrade!
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Instagram className="w-5 h-5 mr-2" />
                  Idite na Instagram
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Giveaway;