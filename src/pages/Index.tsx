import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Home, TreePine, Store, CheckCircle2, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { properties, testimonials } from '@/lib/propertyData';
import heroImage from '@/assets/hero-apartments.jpg';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-hero-gradient-from/90 to-hero-gradient-to/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            MahaKshetra Realty
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Trusted Real Estate Projects in Hyderabad & Telangana
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Site Development, Apartments, Villas, Agricultural & Commercial Properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" variant="secondary">View Projects</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">Enquire Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="site">Site Layouts</SelectItem>
                    <SelectItem value="apartment">Apartments</SelectItem>
                    <SelectItem value="villa">Villas</SelectItem>
                    <SelectItem value="agricultural">Agricultural</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="warangal">Warangal</SelectItem>
                    <SelectItem value="sangareddy">Sangareddy</SelectItem>
                    <SelectItem value="nalgonda">Nalgonda</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50">Under ₹50 Lakhs</SelectItem>
                    <SelectItem value="50-1cr">₹50L - ₹1 Cr</SelectItem>
                    <SelectItem value="1-2cr">₹1-2 Cr</SelectItem>
                    <SelectItem value="above-2cr">Above ₹2 Cr</SelectItem>
                  </SelectContent>
                </Select>
                <Link to="/projects" className="w-full">
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search Properties
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Segments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Property Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Site Layouts</h3>
                <p className="text-sm text-muted-foreground">HMDA approved residential plotting ventures</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Home className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Apartments & Villas</h3>
                <p className="text-sm text-muted-foreground">Modern living spaces with premium amenities</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <TreePine className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Agricultural Lands</h3>
                <p className="text-sm text-muted-foreground">Fertile lands for farming and investment</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Store className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Commercial</h3>
                <p className="text-sm text-muted-foreground">Prime commercial properties in IT hubs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link to="/projects">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MK Realty?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Transparent Dealing', desc: 'Clear pricing and honest communication throughout' },
              { title: 'Clear Title', desc: 'All properties with verified legal documentation' },
              { title: 'On-Time Delivery', desc: 'Committed to project timelines and promises' },
              { title: 'Prime Locations', desc: 'Strategic locations across Hyderabad & Telangana' },
              { title: 'RERA Compliant', desc: 'All projects registered and compliant' },
              { title: '24/7 Support', desc: 'Dedicated customer support for all your queries' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">{testimonial.text}</p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for a Property in Hyderabad or Telangana?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Talk to MK Realty today and find your perfect property with transparent pricing and clear documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">Contact Us</Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" className="bg-accent hover:bg-accent/90">Call +91 98765 43210</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
