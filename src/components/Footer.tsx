import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/mk-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="MK Realty" className="h-12 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/80 mb-4">
              MK Realty – Site, Apartment, Villa, Agricultural & Commercial Real Estate Projects in Hyderabad & Telangana.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/locations" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Locations</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Site Development</li>
              <li className="text-sm text-primary-foreground/80">Apartment Development</li>
              <li className="text-sm text-primary-foreground/80">Villa Construction</li>
              <li className="text-sm text-primary-foreground/80">Agricultural Lands</li>
              <li className="text-sm text-primary-foreground/80">Commercial Properties</li>
              <li className="text-sm text-primary-foreground/80">Documentation Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:mkrealty@gmail.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  mkrealty@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} MK Realty. All rights reserved. | <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
