
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, BookText, FileText, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Jaiib = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubjectSelect = (subject: string) => {
    setLoading(true);
    console.log(`Selected subject: ${subject}`);
    // Navigate to the appropriate subject page
    setTimeout(() => {
      navigate(`/jaiib/${subject.toLowerCase().replace(/\s+/g, '-')}`);
      setLoading(false);
    }, 300);
  };

  const subjects = [
    {
      id: 'indian-economy',
      title: 'Indian Economy & Indian Financial System',
      description: 'Understanding macroeconomic concepts and financial markets in India',
      icon: BookOpen,
      route: 'indian-economy'
    },
    {
      id: 'principles-of-banking',
      title: 'Principles & Practices of Banking',
      description: 'Core banking operations, regulations, and risk management',
      icon: BookText,
      route: 'principles-banking'
    },
    {
      id: 'accounting',
      title: 'Accounting & Financial Management for Bankers',
      description: 'Banking accounting principles and financial analysis',
      icon: FileText,
      route: 'accounting-financial'
    },
    {
      id: 'retail-banking',
      title: 'Retail Banking & Wealth Management',
      description: 'Customer-oriented banking services and wealth management products',
      icon: Banknote,
      route: 'retail-banking'
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-auth-gradient p-4 animate-fade-in">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">JAIIB Exam Preparation</h1>
          <p className="text-xl text-auth-light mb-2">Junior Associate of the Indian Institute of Bankers</p>
          <p className="text-auth-light">Select a subject to begin studying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.id}
              className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer" 
              onClick={() => handleSubjectSelect(subject.route)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <subject.icon size={40} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{subject.title}</h2>
                <p className="text-muted-foreground">{subject.description}</p>
                <Button className="mt-4 w-full" disabled={loading}>
                  Study {subject.title.split('&')[0].trim()}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/options')} 
            className="bg-white/10 text-white hover:bg-white/20"
          >
            Back to Options
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jaiib;
