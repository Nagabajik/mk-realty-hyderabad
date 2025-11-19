import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface EnquiryFormProps {
  propertyName?: string;
}

const EnquiryForm = ({ propertyName }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you shortly.",
    });
    setFormData({ name: '', email: '', phone: '', propertyType: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
        />
      </div>
      {!propertyName && (
        <div>
          <Label htmlFor="propertyType">Property Interest</Label>
          <Select value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="site">Site Layout / Plots</SelectItem>
              <SelectItem value="apartment">Apartment / Flat</SelectItem>
              <SelectItem value="villa">Villa / Individual House</SelectItem>
              <SelectItem value="agricultural">Agricultural Land</SelectItem>
              <SelectItem value="commercial">Commercial Property</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your requirements..."
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full">Submit Enquiry</Button>
    </form>
  );
};

export default EnquiryForm;
