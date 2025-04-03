
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

const BankingRegulations = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('module-a');

  const modules = [
    {
      id: 'module-a',
      title: 'Module A: Regulations and Compliance',
      chapters: [
        'RBI Act, Banking Regulation Act',
        'FEMA and Anti-Money Laundering (AML) Laws',
        'Banking Ombudsman Scheme',
        'Corporate Governance Norms for Banks',
        'Consumer Protection and Fair Practices',
      ],
    },
    {
      id: 'module-b',
      title: 'Module B: Important Acts/Laws Related to Banking Operations',
      chapters: [
        'Negotiable Instruments Act',
        'SARFAESI Act and Debt Recovery Tribunals (DRT)',
        'Banking Companies Act and Company Law Basics',
        'Insolvency and Bankruptcy Code (IBC)',
        'Bank Guarantees and Letters of Credit',
      ],
    },
    {
      id: 'module-c',
      title: 'Module C: Laws Related to Securities and Financial Crimes',
      chapters: [
        'SEBI Act and Capital Market Regulations',
        'Prevention of Money Laundering Act (PMLA)',
        'Cyber Security Laws in Banking',
        'Fraud Prevention and Whistleblower Protection',
        'Financial Crimes and KYC Norms',
      ],
    },
    {
      id: 'module-d',
      title: 'Module D: Commercial & Other Laws Related to Banking',
      chapters: [
        'Law of Contracts and Banker-Customer Relationship',
        'The Indian Contract Act and Sale of Goods Act',
        'Partnership Act and Limited Liability Partnership (LLP)',
        'Consumer Protection Act and Banking Ombudsman Scheme',
        'Arbitration and Conciliation Act',
      ],
    },
  ];

  const handleQuizStart = (moduleName: string, chapterName: string) => {
    console.log(`Starting quiz for ${moduleName} - ${chapterName}`);
    // We would navigate to the quiz page here in a real implementation
    // navigate(`/caiib/banking-regulations/quiz/${moduleName}/${chapterName}`);
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
          <h1 className="text-3xl font-bold mb-2">Banking Regulations & Business Laws (BRBL)</h1>
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

export default BankingRegulations;
