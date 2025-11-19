export interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  type: 'Site Layout' | 'Apartment' | 'Villa' | 'Agricultural Land' | 'Commercial';
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  priceRange: string;
  plotSize?: string;
  builtUpArea?: string;
  units?: string;
  image: string;
  description: string;
  amenities: string[];
  locationHighlights: string[];
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    name: 'MK Green Meadows',
    location: 'Kompally, Hyderabad',
    city: 'Hyderabad',
    type: 'Site Layout',
    status: 'Ongoing',
    priceRange: '₹45 - 65 Lakhs',
    plotSize: '150-250 sq.yds',
    units: '120 Plots',
    image: '/property-layouts.jpg',
    description: 'Premium gated community with wide internal roads, 24/7 security, and modern amenities. HMDA approved venture with clear title.',
    amenities: ['24/7 Security', 'Underground Drainage', 'Street Lights', 'Children Play Area', 'Landscaped Parks', 'Gated Community'],
    locationHighlights: ['5 mins to ORR', '15 mins to Secunderabad', '10 mins to Medchal', 'Near Schools & Hospitals'],
    featured: true
  },
  {
    id: '2',
    name: 'MK Elite Towers',
    location: 'Gachibowli, Hyderabad',
    city: 'Hyderabad',
    type: 'Apartment',
    status: 'Ongoing',
    priceRange: '₹75 Lakhs - 1.2 Cr',
    builtUpArea: '1200-2000 sq.ft',
    units: '2 & 3 BHK',
    image: '/hero-apartments.jpg',
    description: 'Luxury apartments in the heart of IT corridor with world-class amenities and modern architecture.',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Power Backup', 'Covered Parking', 'Landscaped Gardens', 'Indoor Games'],
    locationHighlights: ['Walking distance to DLF Cyber City', '2 km to HITEC City', 'Near ISB', 'Metro connectivity'],
    featured: true
  },
  {
    id: '3',
    name: 'MK Royal Villas',
    location: 'Miyapur, Hyderabad',
    city: 'Hyderabad',
    type: 'Villa',
    status: 'Upcoming',
    priceRange: '₹1.5 - 2.5 Cr',
    builtUpArea: '2500-3500 sq.ft',
    plotSize: '200-300 sq.yds',
    units: '45 Villas',
    image: '/property-villas.jpg',
    description: 'Premium independent villas with contemporary design, private gardens, and luxury finishes.',
    amenities: ['Private Garden', 'Covered Parking', 'Clubhouse', 'Security', 'Children Play Area', 'Swimming Pool'],
    locationHighlights: ['Near Metro Station', '5 mins to Miyapur', 'Excellent road connectivity', 'Near Shopping Malls'],
    featured: true
  },
  {
    id: '4',
    name: 'MK Agri Farms',
    location: 'Sangareddy District',
    city: 'Sangareddy',
    type: 'Agricultural Land',
    status: 'Ongoing',
    priceRange: '₹15 - 25 Lakhs/Acre',
    plotSize: '1-5 Acres',
    image: '/property-agricultural.jpg',
    description: 'Fertile agricultural land with water connection and clear title. Ideal for farming or investment.',
    amenities: ['Bore Well', 'Electricity Connection', 'Road Access', 'Irrigation Facility', 'Red Soil', 'Fencing Option'],
    locationHighlights: ['NH 65 Access', '45 mins from Hyderabad', 'Near Sangareddy Town', 'Good water table'],
  },
  {
    id: '5',
    name: 'MK Business Hub',
    location: 'Madhapur, Hyderabad',
    city: 'Hyderabad',
    type: 'Commercial',
    status: 'Completed',
    priceRange: '₹85 Lakhs - 3 Cr',
    builtUpArea: '800-3000 sq.ft',
    image: '/property-commercial.jpg',
    description: 'Prime commercial spaces in IT corridor. Ideal for offices, retail, and business establishments.',
    amenities: ['Lift', 'Power Backup', 'Parking', 'Security', 'Conference Rooms', 'Cafeteria'],
    locationHighlights: ['Prime location', 'Near IT companies', 'Excellent connectivity', 'High footfall area'],
  },
  {
    id: '6',
    name: 'MK Paradise Plots',
    location: 'Warangal Highway',
    city: 'Warangal',
    type: 'Site Layout',
    status: 'Ongoing',
    priceRange: '₹25 - 40 Lakhs',
    plotSize: '150-200 sq.yds',
    units: '80 Plots',
    image: '/property-layouts.jpg',
    description: 'DTCP approved residential plots on Warangal highway with excellent appreciation potential.',
    amenities: ['Gated Community', 'Street Lights', 'Drainage', 'Water Supply', 'Avenue Plantation', 'Park'],
    locationHighlights: ['On main highway', '20 mins to Warangal', 'Near educational institutions', 'Good investment'],
  },
  {
    id: '7',
    name: 'MK Heights',
    location: 'LB Nagar, Hyderabad',
    city: 'Hyderabad',
    type: 'Apartment',
    status: 'Completed',
    priceRange: '₹55 - 85 Lakhs',
    builtUpArea: '1000-1500 sq.ft',
    units: '2 & 3 BHK',
    image: '/hero-apartments.jpg',
    description: 'Ready to move apartments with excellent connectivity and modern amenities.',
    amenities: ['Lift', 'Power Backup', 'Security', 'Parking', 'Water Supply', 'Intercom'],
    locationHighlights: ['Near Metro', 'Close to ORR', 'Schools nearby', 'Good connectivity'],
  },
  {
    id: '8',
    name: 'MK Garden Homes',
    location: 'Shadnagar, Telangana',
    city: 'Shadnagar',
    type: 'Villa',
    status: 'Ongoing',
    priceRange: '₹80 Lakhs - 1.2 Cr',
    builtUpArea: '1800-2400 sq.ft',
    plotSize: '150-200 sq.yds',
    units: '60 Villas',
    image: '/property-villas.jpg',
    description: 'Affordable luxury villas near ORR with modern design and amenities.',
    amenities: ['Clubhouse', 'Security', 'Power Backup', 'Parking', 'Children Play Area', 'Parks'],
    locationHighlights: ['Near ORR', 'Pharma City nearby', '30 mins to Airport', 'Peaceful location'],
  },
  {
    id: '9',
    name: 'MK Prime Lands',
    location: 'Nalgonda District',
    city: 'Nalgonda',
    type: 'Agricultural Land',
    status: 'Ongoing',
    priceRange: '₹12 - 20 Lakhs/Acre',
    plotSize: '2-10 Acres',
    image: '/property-agricultural.jpg',
    description: 'Agricultural land suitable for farming and plantations with irrigation facilities.',
    amenities: ['Water Source', 'Electricity', 'Road Connectivity', 'Fertile Soil', 'Clear Title'],
    locationHighlights: ['Near main road', 'Good water availability', '1 hour from Hyderabad', 'Agricultural zone'],
  },
  {
    id: '10',
    name: 'MK Tech Park',
    location: 'Kondapur, Hyderabad',
    city: 'Hyderabad',
    type: 'Commercial',
    status: 'Upcoming',
    priceRange: 'Price on Request',
    builtUpArea: '1000-5000 sq.ft',
    image: '/property-commercial.jpg',
    description: 'Modern commercial complex in prime IT location. Suitable for IT companies and corporate offices.',
    amenities: ['High-speed Elevators', 'Cafeteria', 'Conference Rooms', 'Parking', 'Power Backup', 'Security'],
    locationHighlights: ['IT corridor', 'Near major tech companies', 'Metro planned', 'Excellent infrastructure'],
  },
];

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Hyderabad',
    text: 'Excellent service and transparent dealing. MK Realty helped us find our dream villa in Miyapur. The documentation process was smooth and hassle-free.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    location: 'Gachibowli',
    text: 'Very professional team. They guided us through the entire process of buying our apartment. Highly recommend MK Realty for genuine property deals.',
    rating: 5
  },
  {
    name: 'Venkat Reddy',
    location: 'Kompally',
    text: 'Bought agricultural land through MK Realty. Clear title, good location, and fair pricing. Happy with the investment and their after-sales support.',
    rating: 5
  },
  {
    name: 'Anitha Rao',
    location: 'Warangal',
    text: 'Best real estate company in Telangana. They have a wide range of properties and their team is very helpful. Got a great plot deal with them.',
    rating: 5
  }
];
