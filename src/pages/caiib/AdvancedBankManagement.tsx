
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const AdvancedBankManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('module-a');

  const modules = [
    {
      id: 'module-a',
      title: 'Module A: Statistics',
      chapters: [
        'Measures of Central Tendency and Dispersion',
        'Probability and Expected Value',
        'Correlation and Regression',
        'Time Series Analysis',
        'Sampling Methods and Hypothesis Testing',
      ],
    },
    {
      id: 'module-b',
      title: 'Module B: Human Resource Management in Banks',
      chapters: [
        'Fundamentals of Human Resource Management',
        'Motivation Theories and Leadership Styles',
        'Performance Appraisal and Training & Development',
        'Industrial Relations and Labour Laws',
        'HRM Trends in Banks',
      ],
    },
    {
      id: 'module-c',
      title: 'Module C: Credit Management',
      chapters: [
        'Principles of Credit Management',
        'Working Capital Finance',
        'Term Loans and Project Finance',
        'Credit Monitoring and NPA Management',
        'Credit Risk and Credit Rating',
      ],
    },
    {
      id: 'module-d',
      title: 'Module D: Compliance in Banks and Corporate Governance',
      chapters: [
        'Compliance in Banks – An Overview',
        'Basel Norms and Risk Management',
        'KYC/AML Guidelines and Regulatory Framework',
        'Corporate Governance in Banks',
        'Ethics in Banking',
      ],
    },
  ];

  const handleQuizStart = (moduleName: string, chapterName: string) => {
    console.log(`Starting quiz for ${moduleName} - ${chapterName}`);
    // We would navigate to the quiz page here in a real implementation
    // navigate(`/caiib/advanced-bank-management/quiz/${moduleName}/${chapterName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" onClick={() => navigate('/caiib')} className="flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Back to CAIIB</span>
          </Button>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Advanced Bank Management (ABM)</h1>
          <p className="text-muted-foreground">CAIIB - Certified Associate of the Indian Institute of Bankers</p>
        </div>

        <Tabs defaultValue="module-a" onValueChange={setActiveTab} className="w-full">
          <div className="mb-6 overflow-x-auto">
            <TabsList className="w-full justify-start">
              {modules.map((module) => (
                <TabsTrigger 
                  key={module.id} 
                  value={module.id} 
                  className="text-xs sm:text-sm md:text-base px-2 sm:px-4 py-2"
                >
                  {module.title.split(':')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id} className="border rounded-lg p-4 sm:p-6 bg-white shadow">
              <h2 className="text-2xl font-bold mb-4">{module.title}</h2>
              <p className="mb-6 text-muted-foreground">
                Study materials and quizzes for {module.title.split(':')[1].trim()}
              </p>

              <Accordion type="single" collapsible className="w-full">
                {module.chapters.map((chapter, index) => (
                  <AccordionItem key={`${module.id}-chapter-${index}`} value={`chapter-${index}`}>
                    <AccordionTrigger className="text-lg hover:no-underline">
                      {chapter}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 p-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Book className="text-primary h-5 w-5" />
                            <span>Study Material</span>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Book className="h-4 w-4" />
                            <span>Read</span>
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="text-primary h-5 w-5" />
                            <span>15 min Quiz - 30 questions</span>
                          </div>
                          <Button 
                            onClick={() => handleQuizStart(module.title, chapter)} 
                            size="sm"
                          >
                            Start Quiz
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default AdvancedBankManagement;
