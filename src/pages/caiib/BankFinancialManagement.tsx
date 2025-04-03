
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const BankFinancialManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('module-a');
  
  const modules = [
    {
      id: 'module-a',
      title: 'Module A',
      name: 'International Banking',
      chapters: [
        'Foreign Exchange and Exchange Rate Mechanism',
        'International Trade and Finance',
        'Correspondent Banking and SWIFT',
        'Export and Import Finance',
        'FEMA and Other Regulatory Aspects'
      ]
    },
    {
      id: 'module-b',
      title: 'Module B',
      name: 'Risk Management',
      chapters: [
        'Risk and Risk Management in Banks',
        'Market Risk and Interest Rate Risk',
        'Credit Risk and Operational Risk',
        'Liquidity Risk and ALM Framework',
        'Risk Management Practices – Basel Norms'
      ]
    },
    {
      id: 'module-c',
      title: 'Module C',
      name: 'Treasury Management',
      chapters: [
        'Introduction to Treasury Management',
        'Money Market, Capital Market, and Debt Market',
        'Forex Market and Derivatives',
        'Investment Policies and Regulatory Framework',
        'Treasury Risk Management'
      ]
    },
    {
      id: 'module-d',
      title: 'Module D',
      name: 'Balance Sheet Management',
      chapters: [
        'Asset-Liability Management (ALM)',
        'Capital Adequacy and Basel III Guidelines',
        'Bank Capital and Profitability Management',
        'Interest Rate Risk and Liquidity Risk',
        'Stress Testing and ICAAP'
      ]
    }
  ];

  const handleStartQuiz = (moduleId: string, chapterIndex: number) => {
    const chapter = modules.find(m => m.id === moduleId)?.chapters[chapterIndex];
    console.log(`Starting quiz for ${moduleId}, Chapter: ${chapter}`);
    // In a real app, we would navigate to the quiz page
    // navigate(`/caiib/bank-financial-management/${moduleId}/quiz/${chapterIndex}`);
  };

  return (
    <div className="min-h-screen w-full bg-auth-gradient p-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/caiib')}
            className="bg-white/10 text-white hover:bg-white/20 mr-4"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Bank Financial Management (BFM)</h1>
            <p className="text-xl text-auth-light">CAIIB Exam Preparation</p>
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
                              <BookText size={20} className="text-primary-foreground" />
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

export default BankFinancialManagement;
