import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-gradient">
                  Vinayak Foods
                </h3>
                <p className="text-xs text-muted-foreground -mt-1">
                  Authentic Maharashtrian
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Bringing you the authentic taste of Maharashtra with traditional recipes
              passed down through generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-muted-foreground">8879791126</p>
                  <p className="text-muted-foreground">9342865282</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  9:00 AM - 9:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-foreground">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground">10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Vinayak Foods. All rights reserved. Made with ❤️ for authentic
            Maharashtrian cuisine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;