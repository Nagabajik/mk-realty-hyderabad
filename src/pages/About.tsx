import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MK Realty</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your Trusted Real Estate Partner in Hyderabad & Telangana
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MK Realty has been a cornerstone in the Telangana real estate market, dedicated to providing transparent, 
                  reliable, and customer-focused property solutions. Based in Hyderabad, we specialize in comprehensive real 
                  estate services spanning site development, apartment construction, villa development, and land transactions 
                  across agricultural, residential, and commercial sectors.
                </p>
                <p>
                  Our journey began with a simple vision: to make property ownership accessible, transparent, and rewarding 
                  for every customer. Over the years, we have successfully delivered numerous projects across Hyderabad and 
                  greater Telangana, earning the trust of hundreds of satisfied clients.
                </p>
                <p>
                  What sets MK Realty apart is our unwavering commitment to legal compliance, clear title documentation, 
                  RERA registration, and on-time project delivery. We believe in building long-term relationships with our 
                  clients, built on trust, integrity, and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide quality real estate solutions with complete transparency, legal compliance, and 
                    exceptional customer service, making property ownership a seamless experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <Eye className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the most trusted and preferred real estate brand in Telangana, known for integrity, 
                    innovation, and customer satisfaction in every project we undertake.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Our Values</h3>
                  <p className="text-muted-foreground">
                    Transparency, Integrity, Customer-First Approach, Legal Compliance, Quality Delivery, 
                    and Long-term Relationships form the foundation of everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose MK Realty?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Legal Transparency',
                  description: 'All our properties come with clear, verified title documentation and legal compliance.'
                },
                {
                  title: 'RERA Compliance',
                  description: 'We ensure all projects are registered under RERA and meet regulatory standards.'
                },
                {
                  title: 'Customer-First Approach',
                  description: 'Your satisfaction is our priority. We guide you through every step of your property journey.'
                },
                {
                  title: 'Telangana Market Expertise',
                  description: 'Deep understanding of local markets, regulations, and emerging investment opportunities.'
                },
                {
                  title: 'On-Time Delivery',
                  description: 'We honor our commitments and deliver projects within promised timelines.'
                },
                {
                  title: 'Post-Sale Support',
                  description: 'Our relationship doesn\'t end at sale. We provide ongoing support and assistance.'
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground mb-8">
                MK Realty is led by a team of experienced professionals with decades of combined experience in 
                real estate development, legal compliance, and customer service. Our leadership team is committed 
                to maintaining the highest standards of integrity and excellence in every project.
              </p>
              <p className="text-muted-foreground">
                With deep roots in the Telangana market and extensive networks across government, legal, and 
                construction sectors, we bring unmatched expertise to every property transaction.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
