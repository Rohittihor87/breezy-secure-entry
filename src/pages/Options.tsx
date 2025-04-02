
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, BookText, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Options = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleOptionSelect = (option: string) => {
    setLoading(true);
    console.log(`Selected option: ${option}`);
    // In a real app, we would navigate to the respective page
    setTimeout(() => {
      navigate(`/${option.toLowerCase()}`);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-auth-gradient p-4 animate-fade-in">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Banking on Success</h1>
          <p className="text-xl text-auth-light mb-2">Choose Your Path</p>
          <p className="text-auth-light">Select what you want to explore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* JAIIB Option */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer" onClick={() => handleOptionSelect('jaiib')}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <BookOpen size={40} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">JAIIB</h2>
              <p className="text-muted-foreground">Junior Associate of the Indian Institute of Bankers</p>
              <Button className="mt-4 w-full" disabled={loading}>
                Explore JAIIB
              </Button>
            </CardContent>
          </Card>

          {/* CAIIB Option */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer" onClick={() => handleOptionSelect('caiib')}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <BookText size={40} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">CAIIB</h2>
              <p className="text-muted-foreground">Certified Associate of the Indian Institute of Bankers</p>
              <Button className="mt-4 w-full" disabled={loading}>
                Explore CAIIB
              </Button>
            </CardContent>
          </Card>

          {/* User Details Option */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer" onClick={() => handleOptionSelect('profile')}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <UserCog size={40} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">User Details</h2>
              <p className="text-muted-foreground">Manage your profile and account settings</p>
              <Button className="mt-4 w-full" disabled={loading}>
                View Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Options;
