import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Locations = () => {
  const locations = [
    {
      name: 'Hyderabad City',
      areas: ['Gachibowli', 'Madhapur', 'Kompally', 'Miyapur', 'LB Nagar', 'Kondapur'],
      propertyTypes: ['Apartments', 'Villas', 'Commercial', 'Site Layouts'],
      description: 'Prime locations in Hyderabad with excellent connectivity to IT hubs, schools, and hospitals.'
    },
    {
      name: 'Warangal District',
      areas: ['Warangal Highway', 'Warangal City'],
      propertyTypes: ['Site Layouts', 'Agricultural Land'],
      description: 'Emerging real estate destination with good appreciation potential and infrastructure development.'
    },
    {
      name: 'Sangareddy District',
      areas: ['Sangareddy Town', 'Patancheru'],
      propertyTypes: ['Agricultural Land', 'Site Layouts'],
      description: 'Excellent agricultural lands and residential plots with good road connectivity to Hyderabad.'
    },
    {
      name: 'Nalgonda District',
      areas: ['Nalgonda', 'Bhongir'],
      propertyTypes: ['Agricultural Land'],
      description: 'Fertile agricultural lands suitable for farming and long-term investment.'
    },
    {
      name: 'Shadnagar',
      areas: ['Shadnagar Town', 'ORR Vicinity'],
      propertyTypes: ['Villas', 'Site Layouts'],
      description: 'Growing residential hub near ORR with peaceful environment and modern amenities.'
    },
    {
      name: 'Outer Ring Road (ORR)',
      areas: ['Various locations along ORR'],
      propertyTypes: ['Villas', 'Apartments', 'Commercial'],
      description: 'Strategic locations along ORR with excellent connectivity and high growth potential.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Properties across Hyderabad & Telangana
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <Card>
              <CardContent className="p-6">
                <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">Telangana State Map</p>
                    <p className="text-sm text-muted-foreground">Showing MK Realty project locations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{location.name}</h3>
                      <Building2 className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Key Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {location.areas.map((area, idx) => (
                          <span key={idx} className="text-xs bg-secondary px-2 py-1 rounded">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Available Properties:</p>
                      <div className="flex flex-wrap gap-2">
                        {location.propertyTypes.map((type, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why These Locations?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'IT Hub Proximity', desc: 'Close to major IT parks and tech corridors' },
                { title: 'Infrastructure', desc: 'Well-developed roads, metro, and utilities' },
                { title: 'Appreciation', desc: 'High growth potential and property appreciation' },
                { title: 'Connectivity', desc: 'Excellent road and public transport connectivity' }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Location</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore properties in your preferred location or let us help you find the ideal investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg">Browse All Projects</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Locations;
