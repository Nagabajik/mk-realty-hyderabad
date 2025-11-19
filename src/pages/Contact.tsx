import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with MK Realty for all your property needs
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question about our properties or services? Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Office Address</h3>
                        <p className="text-sm text-muted-foreground">
                          Hyderabad, Telangana, India
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone Number</h3>
                        <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email Address</h3>
                        <a href="mailto:mkrealty@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          mkrealty@gmail.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <EnquiryForm />
                  </CardContent>
                </Card>
              </div>
            </div>
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
                    <p className="text-lg font-semibold">Hyderabad Office Location</p>
                    <p className="text-sm text-muted-foreground">Map showing our office in Hyderabad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prefer to Talk Directly?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call us directly or schedule a site visit to see our properties in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  <Phone className="inline mr-2 h-5 w-5" />
                  Call +91 98765 43210
                </button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
                  WhatsApp Us
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

export default Contact;
