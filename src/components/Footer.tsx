import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold">Dekor Kuća</span>
            </div>
            <p className="text-sm text-muted">
              Dekoracija koja donosi prirodu u vaš dom. Otkrijte našu kolekciju vaza, figurina i dekorativnih predmeta.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Brze veze</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted hover:text-background transition-colors">
                Početna
              </Link>
              <Link to="/proizvodi" className="block text-sm text-muted hover:text-background transition-colors">
                Svi Proizvodi
              </Link>
              <Link to="/blog" className="block text-sm text-muted hover:text-background transition-colors">
                Blog
              </Link>
              <Link to="#" className="block text-sm text-muted hover:text-background transition-colors">
                O nama
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted" />
                <span className="text-sm text-muted">info@dekorkuca.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted" />
                <span className="text-sm text-muted">+381 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted" />
                <span className="text-sm text-muted">Knez Mihailova 15, Beograd</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Radno vreme</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted" />
                <div className="text-sm">
                  <div className="text-muted">Pon - Pet: 09:00 - 18:00</div>
                  <div className="text-muted">Sub: 10:00 - 16:00</div>
                  <div className="text-muted">Ned: Zatvoreno</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted">
              © {new Date().getFullYear()} Dekor Kuća. Sva prava zadržana.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/politika-privatnosti" className="text-muted hover:text-background transition-colors">
                Politika privatnosti
              </Link>
              <Link to="/uslovi-koriscenja" className="text-muted hover:text-background transition-colors">
                Uslovi korišćenja
              </Link>
              <Link to="/povrat-robe" className="text-muted hover:text-background transition-colors">
                Povrat robe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;