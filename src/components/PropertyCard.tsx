import { Link } from 'react-router-dom';
import { MapPin, Home, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Property } from '@/lib/propertyData';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge 
          className="absolute top-3 right-3"
          variant={property.status === 'Completed' ? 'default' : property.status === 'Ongoing' ? 'secondary' : 'outline'}
        >
          {property.status}
        </Badge>
        {property.featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Home className="h-4 w-4 mr-1" />
          {property.type}
        </div>
        <div className="flex items-center text-lg font-bold text-primary">
          <TrendingUp className="h-5 w-5 mr-1" />
          {property.priceRange}
        </div>
        {(property.plotSize || property.builtUpArea) && (
          <p className="text-sm text-muted-foreground mt-2">
            {property.plotSize || property.builtUpArea}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/property/${property.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
