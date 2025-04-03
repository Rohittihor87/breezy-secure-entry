
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const PrinciplesBanking = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('module-a');
  
  const modules = [
    {
      id: 'module-a',
      title: 'Module A',
      name: 'General Banking Operations',
      chapters: [
        'Banking Structure in India',
        'Regulatory Framework for Banks',
        'Customer Service and Grievance Redressal',
        'Bank Branch Management',
        'AML, KYC, and PMLA'
      ]
    },
    {
      id: 'module-b',
      title: 'Module B',
      name: 'Functions of Banks',
      chapters: [
        'Deposits and Accounts Management',
        'Loans and Advances – Principles and Practices',
        'Retail Banking and MSME Lending',
        'Priority Sector Lending and Financial Inclusion',
        'NPA Management and Recovery'
      ]
    },
    {
      id: 'module-c',
      title: 'Module C',
      name: 'Banking Technology',
      chapters: [
        'Core Banking Solutions (CBS)',
        'Payment and Settlement Systems in India',
        'Cyber Security in Banking',
        'IT Act and Digital Frauds',
        'Innovations in Banking Technology'
      ]
    },
    {
      id: 'module-d',
      title: 'Module D',
      name: 'Ethics in Banks and Financial Institutions',
      chapters: [
        'Business Ethics in Banking',
        'Code of Ethics and Professionalism',
        'Customer Protection and Transparency',
        'Whistleblowing Policies',
        'Corporate Governance in Banks'
      ]
    }
  ];

  const handleStartQuiz = (moduleId: string, chapterIndex: number) => {
    const chapter = modules.find(m => m.id === moduleId)?.chapters[chapterIndex];
    console.log(`Starting quiz for ${moduleId}, Chapter: ${chapter}`);
    // In a real app, we would navigate to the quiz page
    // navigate(`/jaiib/principles-banking/${moduleId}/quiz/${chapterIndex}`);
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
            <h1 className="text-3xl font-bold text-white">Principles & Practices of Banking</h1>
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

export default PrinciplesBanking;
