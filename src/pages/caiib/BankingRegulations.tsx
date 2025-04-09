
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from "@/hooks/use-toast";
import QuizModal from '@/components/jaiib/QuizModal';
import { useQuiz } from '@/hooks/jaiib/useQuiz';
import { quizQuestions } from '@/data/jaiib/quizQuestions';

const BankingRegulations = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('module-a');
  const quiz = useQuiz({ quizQuestions });
  
  const modules = [
    {
      id: 'module-a',
      title: 'Module A',
      name: 'Regulations and Compliance',
      chapters: [
        'RBI Act, Banking Regulation Act',
        'FEMA and Anti-Money Laundering (AML) Laws',
        'Banking Ombudsman Scheme',
        'Corporate Governance Norms for Banks',
        'Consumer Protection and Fair Practices'
      ]
    },
    {
      id: 'module-b',
      title: 'Module B',
      name: 'Important Acts/Laws Related to Banking Operations',
      chapters: [
        'Negotiable Instruments Act',
        'SARFAESI Act and Debt Recovery Tribunals (DRT)',
        'Banking Companies Act and Company Law Basics',
        'Insolvency and Bankruptcy Code (IBC)',
        'Bank Guarantees and Letters of Credit'
      ]
    },
    {
      id: 'module-c',
      title: 'Module C',
      name: 'Laws Related to Securities and Financial Crimes',
      chapters: [
        'SEBI Act and Capital Market Regulations',
        'Prevention of Money Laundering Act (PMLA)',
        'Cyber Security Laws in Banking',
        'Fraud Prevention and Whistleblower Protection',
        'Financial Crimes and KYC Norms'
      ]
    },
    {
      id: 'module-d',
      title: 'Module D',
      name: 'Commercial & Other Laws Related to Banking',
      chapters: [
        'Law of Contracts and Banker-Customer Relationship',
        'The Indian Contract Act and Sale of Goods Act',
        'Partnership Act and Limited Liability Partnership (LLP)',
        'Consumer Protection Act and Banking Ombudsman Scheme',
        'Arbitration and Conciliation Act'
      ]
    }
  ];

  const handleStartQuiz = (moduleId: string, chapterIndex: number) => {
    const chapter = modules.find(m => m.id === moduleId)?.chapters[chapterIndex];
    console.log(`Starting quiz for ${moduleId}, Chapter: ${chapter}`);
    
    if (quizQuestions[chapter as keyof typeof quizQuestions]) {
      quiz.handleStartQuiz(moduleId, chapterIndex);
    } else {
      toast({
        title: "Quiz Not Available",
        description: `Quiz for "${chapter}" is coming soon!`,
        variant: "destructive"
      });
      console.log(`Quiz for ${chapter} not available yet`);
    }
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
            <h1 className="text-3xl font-bold text-white">Banking Regulations & Business Laws (BRBL)</h1>
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
                              <ScrollText size={20} className="text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{chapter}</h3>
                              <Badge variant="outline" className="text-xs mt-1 bg-white/10">
                                {chapter === 'RBI Act, Banking Regulation Act' ? '30 questions' : 'Coming soon'}
                              </Badge>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleStartQuiz(module.id, index)}
                            className="whitespace-nowrap"
                            disabled={chapter !== 'RBI Act, Banking Regulation Act'}
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
      
      <QuizModal
        quizOpen={quiz.quizOpen}
        setQuizOpen={quiz.setQuizOpen}
        handleCloseQuiz={quiz.handleCloseQuiz}
        currentChapter={quiz.currentChapter}
        timeRemaining={quiz.timeRemaining}
        timerActive={quiz.timerActive}
        showResults={quiz.showResults}
        quizSubmitted={quiz.quizSubmitted}
        score={quiz.score}
        totalQuestions={quiz.totalQuestions}
        currentQuestionIndex={quiz.currentQuestionIndex}
        progressPercentage={quiz.progressPercentage}
        currentQuestion={quiz.currentQuestion}
        selectedAnswers={quiz.selectedAnswers}
        handleAnswerSelect={quiz.handleAnswerSelect}
        handleNextQuestion={quiz.handleNextQuestion}
        handleSubmitQuiz={quiz.handleSubmitQuiz}
        handleSkipQuestion={quiz.handleSkipQuestion}
        handleRetryQuiz={quiz.handleRetryQuiz}
        quizQuestions={quizQuestions}
      />
    </div>
  );
};

export default BankingRegulations;
