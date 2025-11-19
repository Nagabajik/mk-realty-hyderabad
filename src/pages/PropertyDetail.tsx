import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import { MapPin, Home, TrendingUp, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { properties } from '@/lib/propertyData';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <Link to="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Image */}
        <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${property.image})` }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
            <div>
              <Link to="/projects">
                <Button variant="secondary" size="sm" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
              <Badge className="mb-2" variant={property.status === 'Completed' ? 'default' : 'secondary'}>
                {property.status}
              </Badge>
              <h1 className="text-4xl font-bold text-white">{property.name}</h1>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {property.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Type</p>
                        <p className="font-semibold flex items-center">
                          <Home className="h-4 w-4 mr-1" />
                          {property.type}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price Range</p>
                        <p className="font-semibold flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {property.priceRange}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <p className="font-semibold">{property.status}</p>
                      </div>
                    </div>
                    
                    {property.plotSize && (
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">Plot Size: </span>
                        <span className="font-medium">{property.plotSize}</span>
                      </div>
                    )}
                    {property.builtUpArea && (
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">Built-up Area: </span>
                        <span className="font-medium">{property.builtUpArea}</span>
                      </div>
                    )}
                    {property.units && (
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">Units: </span>
                        <span className="font-medium">{property.units}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                    <TabsTrigger value="amenities" className="flex-1">Amenities</TabsTrigger>
                    <TabsTrigger value="location" className="flex-1">Location</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4">About This Property</h2>
                        <p className="text-muted-foreground">{property.description}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="amenities">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Amenities & Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {property.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="location">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Location Highlights</h2>
                        <div className="space-y-3">
                          {property.locationHighlights.map((highlight, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 h-64 bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">Map View - {property.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Enquiry Form */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Interested in This Property?</h3>
                    <EnquiryForm propertyName={property.name} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
