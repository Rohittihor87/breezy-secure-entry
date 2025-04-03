
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banknote, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const RetailBanking = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('module-a');
  
  const modules = [
    {
      id: 'module-a',
      title: 'Module A',
      name: 'Retail Banking',
      chapters: [
        'Introduction to Retail Banking',
        'Types of Retail Banking Products',
        'Digital Banking and Fintech Innovations',
        'Retail Banking Strategies',
        'Regulations in Retail Banking'
      ]
    },
    {
      id: 'module-b',
      title: 'Module B',
      name: 'Retail Products and Recovery',
      chapters: [
        'Home Loans, Auto Loans, and Personal Loans',
        'Credit and Debit Cards – Features & Operations',
        'Loan Recovery and SARFAESI Act',
        'Securitization and Asset Reconstruction',
        'NPA Management in Retail Loans'
      ]
    },
    {
      id: 'module-c',
      title: 'Module C',
      name: 'Support Services - Marketing of Banking Services/Products',
      chapters: [
        'Marketing Strategies for Banks',
        'Customer Relationship Management in Banks',
        'Digital Marketing for Financial Services',
        'Cross-Selling and Up-Selling in Banking',
        'Service Quality in Banking'
      ]
    },
    {
      id: 'module-d',
      title: 'Module D',
      name: 'Wealth Management',
      chapters: [
        'Basics of Wealth Management',
        'Investment Products – Mutual Funds, Bonds, Insurance',
        'Portfolio Management & Asset Allocation',
        'Retirement Planning and Tax Planning',
        'Estate Planning and Succession Planning'
      ]
    }
  ];

  const handleStartQuiz = (moduleId: string, chapterIndex: number) => {
    const chapter = modules.find(m => m.id === moduleId)?.chapters[chapterIndex];
    console.log(`Starting quiz for ${moduleId}, Chapter: ${chapter}`);
    // In a real app, we would navigate to the quiz page
    // navigate(`/jaiib/retail-banking/${moduleId}/quiz/${chapterIndex}`);
  };

  return (
    <div className="min-h-screen w-full bg-auth-gradient p-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/jaiib')}
            className="bg-white/10 text-white hover:bg-white/20 mr-4"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Retail Banking & Wealth Management</h1>
            <p className="text-xl text-auth-light">JAIIB Exam Preparation</p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-white/10 text-white mb-4 p-1 w-full flex">
            {modules.map(module => (
              <TabsTrigger 
                key={module.id} 
                value={module.id}
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {module.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {modules.map(module => (
            <TabsContent key={module.id} value={module.id}>
              <Card className="bg-white/5 text-white border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">
                      {module.title}: {module.name}
                    </h2>
                    <p className="text-auth-light mb-6">
                      Study each chapter and take the quiz to test your knowledge.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {module.chapters.map((chapter, index) => (
                      <Card key={index} className="bg-white/10 border-none">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                              <Banknote size={20} className="text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{chapter}</h3>
                              <Badge variant="outline" className="text-xs mt-1 bg-white/10">
                                30 questions
                              </Badge>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleStartQuiz(module.id, index)}
                            className="whitespace-nowrap"
                          >
                            Start Quiz
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default RetailBanking;
