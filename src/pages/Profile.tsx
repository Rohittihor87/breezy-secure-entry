
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCog, Phone, Mail, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    userType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting user details:', formData);
    
    // In a real app, we would save this data to a database
    setTimeout(() => {
      setLoading(false);
      navigate('/options');
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-auth-gradient p-4 animate-fade-in">
      <div className="w-full max-w-md">
        <Card className="border-none shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <UserCog size={40} className="text-primary" />
            </div>
            <CardTitle className="text-2xl">User Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Banker Name</Label>
                <div className="relative">
                  <UserCog className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10" 
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="pl-10" 
                    placeholder="Enter your mobile number"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email ID</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10" 
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="userType">User Type</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                  <Select
                    value={formData.userType}
                    onValueChange={handleUserTypeChange}
                    required
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select your user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="banker">Banker</SelectItem>
                      <SelectItem value="professional">Financial Professional</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Details'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => navigate('/options')}
                >
                  Back to Options
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
