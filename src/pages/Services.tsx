import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Home, TreePine, Store, FileText, Hammer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Site Development & Layout Planning',
      description: 'HMDA and DTCP approved residential layout ventures with complete infrastructure development including roads, drainage, water supply, and electrical connections.',
      features: ['HMDA/DTCP Approvals', 'Infrastructure Development', 'Clear Title Verification', 'Gated Community Options']
    },
    {
      icon: Home,
      title: 'Apartment & Gated Community Development',
      description: 'Modern apartments with world-class amenities in prime locations across Hyderabad. RERA registered projects with transparent pricing.',
      features: ['2 & 3 BHK Options', 'Modern Amenities', 'Prime Locations', 'RERA Registered']
    },
    {
      icon: Hammer,
      title: 'Individual House & Villa Construction',
      description: 'Custom villa development with contemporary designs and premium finishes. From land acquisition to turnkey handover.',
      features: ['Custom Designs', 'Premium Finishes', 'Turnkey Solutions', 'Quality Construction']
    },
    {
      icon: TreePine,
      title: 'Agricultural Land Identification & Sale',
      description: 'Fertile agricultural lands across Telangana with water facilities, clear titles, and good road connectivity. Ideal for farming or long-term investment.',
      features: ['Water Facilities', 'Clear Titles', 'Road Connectivity', 'Investment Advisory']
    },
    {
      icon: Store,
      title: 'Residential & Commercial Plot Sale',
      description: 'Premium residential plots and commercial properties in IT corridors and business hubs with excellent appreciation potential.',
      features: ['Strategic Locations', 'High ROI Potential', 'Clear Documentation', 'Flexible Payment Plans']
    },
    {
      icon: FileText,
      title: 'End-to-End Documentation & Registration',
      description: 'Complete legal support for property transactions including title verification, registration, and documentation assistance.',
      features: ['Title Verification', 'Legal Support', 'Registration Assistance', 'Documentation Services']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive Real Estate Solutions Across Hyderabad & Telangana
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: '1', title: 'Initial Consultation', desc: 'Understanding your requirements, budget, and preferences' },
                  { step: '2', title: 'Property Selection', desc: 'Shortlisting properties that match your criteria' },
                  { step: '3', title: 'Site Visit', desc: 'Organized site visits with complete information and transparency' },
                  { step: '4', title: 'Documentation', desc: 'Title verification, legal clearance, and documentation support' },
                  { step: '5', title: 'Registration', desc: 'Complete registration assistance and legal formalities' },
                  { step: '6', title: 'Post-Sale Support', desc: 'Ongoing support for any queries or assistance needed' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your real estate requirements. Our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Contact Us
                </button>
              </a>
              <a href="tel:+919876543210">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
                  Call +91 98765 43210
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
