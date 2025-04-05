import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft, Check, ChevronRight, Clock, AlertTriangle, SkipForward, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { toast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

const IndianEconomy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('module-a');
  const [quizOpen, setQuizOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [skippedQuestionsAlert, setSkippedQuestionsAlert] = useState(false);
  const [skippedCount, setSkippedCount] = useState(0);
  
  const modules = [
    {
      id: 'module-a',
      title: 'Module A',
      name: 'Indian Economic Architecture',
      chapters: [
        'Indian Economy – An Overview',
        'Economic Planning in India',
        'Economic Policies',
        'Infrastructure & Economic Development',
        'Globalisation – Impact on India'
      ],
      freeChapters: 2 // First 2 chapters are free
    },
    {
      id: 'module-b',
      title: 'Module B',
      name: 'Economic Concepts Related to Banking',
      chapters: [
        'Fundamentals of Economics',
        'Microeconomics and Macroeconomics',
        'Monetary Policy and Fiscal Policy',
        'Inflation and Business Cycles',
        'Money Supply & Banking System'
      ],
      freeChapters: 2 // First 2 chapters are free
    },
    {
      id: 'module-c',
      title: 'Module C',
      name: 'Indian Financial Architecture',
      chapters: [
        'Indian Financial System – An Overview',
        'Financial Markets in India',
        'Financial Regulators in India',
        'Role of RBI in Financial System',
        'Development Financial Institutions'
      ],
      freeChapters: 2 // First 2 chapters are free
    },
    {
      id: 'module-d',
      title: 'Module D',
      name: 'Financial Products and Services',
      chapters: [
        'Payment Systems in India',
        'Digital Banking and Financial Inclusion',
        'Alternative Banking Channels',
        'Mutual Funds and Insurance',
        'Derivatives and Other Financial Products'
      ],
      freeChapters: 2 // First 2 chapters are free
    }
  ];

  const quizQuestions = {
    'Indian Economy – An Overview': [
      {
        question: "What type of economy does India have?",
        options: [
          { value: "a", label: "Capitalist" },
          { value: "b", label: "Socialist" },
          { value: "c", label: "Mixed Economy" },
          { value: "d", label: "Communist" }
        ],
        answer: "c"
      },
      {
        question: "Who is known as the father of Indian planning?",
        options: [
          { value: "a", label: "Mahatma Gandhi" },
          { value: "b", label: "Pandit Jawaharlal Nehru" },
          { value: "c", label: "M. Vishveshwarya" },
          { value: "d", label: "B.R. Ambedkar" }
        ],
        answer: "c"
      },
      {
        question: "What is the primary sector of the Indian economy?",
        options: [
          { value: "a", label: "Agriculture" },
          { value: "b", label: "Manufacturing" },
          { value: "c", label: "Banking" },
          { value: "d", label: "IT Services" }
        ],
        answer: "a"
      },
      {
        question: "Which institution is responsible for formulating India's monetary policy?",
        options: [
          { value: "a", label: "NITI Aayog" },
          { value: "b", label: "Ministry of Finance" },
          { value: "c", label: "Reserve Bank of India (RBI)" },
          { value: "d", label: "SEBI" }
        ],
        answer: "c"
      },
      {
        question: "GDP is calculated at which levels?",
        options: [
          { value: "a", label: "Market Prices" },
          { value: "b", label: "Factor Cost" },
          { value: "c", label: "Both (a) and (b)" },
          { value: "d", label: "None of the above" }
        ],
        answer: "c"
      },
      {
        question: "What does the term \"Fiscal Deficit\" refer to?",
        options: [
          { value: "a", label: "Excess of total revenue over total expenditure" },
          { value: "b", label: "Excess of total expenditure over total revenue" },
          { value: "c", label: "Total borrowings of the government" },
          { value: "d", label: "None of the above" }
        ],
        answer: "b"
      },
      {
        question: "Which sector contributes the highest to India's GDP?",
        options: [
          { value: "a", label: "Agriculture" },
          { value: "b", label: "Industry" },
          { value: "c", label: "Services" },
          { value: "d", label: "Mining" }
        ],
        answer: "c"
      },
      {
        question: "Which index measures inflation in India?",
        options: [
          { value: "a", label: "Consumer Price Index (CPI)" },
          { value: "b", label: "Wholesale Price Index (WPI)" },
          { value: "c", label: "Both (a) and (b)" },
          { value: "d", label: "None of the above" }
        ],
        answer: "c"
      },
      {
        question: "Who publishes the Economic Survey of India?",
        options: [
          { value: "a", label: "RBI" },
          { value: "b", label: "NITI Aayog" },
          { value: "c", label: "Ministry of Finance" },
          { value: "d", label: "Planning Commission" }
        ],
        answer: "c"
      },
      {
        question: "Which organization estimates India's GDP?",
        options: [
          { value: "a", label: "Ministry of Finance" },
          { value: "b", label: "NITI Aayog" },
          { value: "c", label: "National Statistical Office (NSO)" },
          { value: "d", label: "RBI" }
        ],
        answer: "c"
      },
      {
        question: "What is the role of NITI Aayog?",
        options: [
          { value: "a", label: "Formulating Monetary Policy" },
          { value: "b", label: "Financial Regulation" },
          { value: "c", label: "Economic Planning and Policy Implementation" },
          { value: "d", label: "Tax Collection" }
        ],
        answer: "c"
      },
      {
        question: "Which of the following is NOT a function of RBI?",
        options: [
          { value: "a", label: "Printing Currency Notes" },
          { value: "b", label: "Controlling Foreign Exchange" },
          { value: "c", label: "Providing Loans to the Public" },
          { value: "d", label: "Managing Monetary Policy" }
        ],
        answer: "c"
      },
      {
        question: "What is \"Repo Rate\"?",
        options: [
          { value: "a", label: "Rate at which RBI lends to commercial banks" },
          { value: "b", label: "Rate at which banks deposit with RBI" },
          { value: "c", label: "Rate at which public borrows from banks" },
          { value: "d", label: "None of the above" }
        ],
        answer: "a"
      },
      {
        question: "What is the full form of MSME?",
        options: [
          { value: "a", label: "Ministry of Small and Medium Enterprises" },
          { value: "b", label: "Micro, Small and Medium Enterprises" },
          { value: "c", label: "Mega, Small and Medium Enterprises" },
          { value: "d", label: "Micro, Subsidized, and Medium Enterprises" }
        ],
        answer: "b"
      },
      {
        question: "Which tax is NOT a part of GST?",
        options: [
          { value: "a", label: "Excise Duty" },
          { value: "b", label: "Sales Tax" },
          { value: "c", label: "Custom Duty" },
          { value: "d", label: "VAT" }
        ],
        answer: "c"
      },
      {
        question: "What is FDI?",
        options: [
          { value: "a", label: "Foreign Domestic Investment" },
          { value: "b", label: "Foreign Direct Investment" },
          { value: "c", label: "Foreign Development Indicator" },
          { value: "d", label: "None of the above" }
        ],
        answer: "b"
      },
      {
        question: "What is the main function of SEBI?",
        options: [
          { value: "a", label: "Regulate Stock Market" },
          { value: "b", label: "Control Inflation" },
          { value: "c", label: "Regulate Banking Sector" },
          { value: "d", label: "Manage Government Finances" }
        ],
        answer: "a"
      },
      {
        question: "Which of the following is a direct tax?",
        options: [
          { value: "a", label: "GST" },
          { value: "b", label: "Income Tax" },
          { value: "c", label: "Sales Tax" },
          { value: "d", label: "Custom Duty" }
        ],
        answer: "b"
      },
      {
        question: "What is the current base year for GDP calculation in India?",
        options: [
          { value: "a", label: "2004-05" },
          { value: "b", label: "2011-12" },
          { value: "c", label: "2014-15" },
          { value: "d", label: "2016-17" }
        ],
        answer: "b"
      },
      {
        question: "What is the function of NABARD?",
        options: [
          { value: "a", label: "Regulate Banking Sector" },
          { value: "b", label: "Develop Rural Economy & Agriculture Financing" },
          { value: "c", label: "Manage Forex Reserves" },
          { value: "d", label: "None of the above" }
        ],
        answer: "b"
      },
      {
        question: "Which of the following is an employment guarantee scheme?",
        options: [
          { value: "a", label: "PM Kisan" },
          { value: "b", label: "MGNREGA" },
          { value: "c", label: "Startup India" },
          { value: "d", label: "Make in India" }
        ],
        answer: "b"
      },
      {
        question: "What is the full form of PSL in banking?",
        options: [
          { value: "a", label: "Public Sector Lending" },
          { value: "b", label: "Priority Sector Lending" },
          { value: "c", label: "Private Sector Lending" },
          { value: "d", label: "Primary Stock Lending" }
        ],
        answer: "b"
      },
      {
        question: "Which of the following is NOT a poverty alleviation program?",
        options: [
          { value: "a", label: "PMAY" },
          { value: "b", label: "RERA" },
          { value: "c", label: "NRLM" },
          { value: "d", label: "PM Garib Kalyan Yojana" }
        ],
        answer: "b"
      },
      {
        question: "Which financial inclusion scheme provides bank accounts to all households?",
        options: [
          { value: "a", label: "PM Awas Yojana" },
          { value: "b", label: "PM Jan Dhan Yojana" },
          { value: "c", label: "Stand-Up India" },
          { value: "d", label: "Mudra Yojana" }
        ],
        answer: "b"
      },
      {
        question: "Which organization regulates microfinance institutions in India?",
        options: [
          { value: "a", label: "RBI" },
          { value: "b", label: "NABARD" },
          { value: "c", label: "SEBI" },
          { value: "d", label: "SIDBI" }
        ],
        answer: "a"
      },
      {
        question: "What is the full form of FRBM Act?",
        options: [
          { value: "a", label: "Financial Regulatory & Banking Management" },
          { value: "b", label: "Fiscal Responsibility and Budget Management" },
          { value: "c", label: "Foreign Reserve & Banking Mechanism" },
          { value: "d", label: "None of the above" }
        ],
        answer: "b"
      },
      {
        question: "Which of the following is a financial stability indicator?",
        options: [
          { value: "a", label: "Forex Reserves" },
          { value: "b", label: "HDI" },
          { value: "c", label: "Green GDP" },
          { value: "d", label: "Inflation Rate" }
        ],
        answer: "d"
      },
      {
        question: "Which year was the LPG reforms introduced in India?",
        options: [
          { value: "a", label: "1980" },
          { value: "b", label: "1991" },
          { value: "c", label: "1995" },
          { value: "d", label: "2000" }
        ],
        answer: "b"
      },
      {
        question: "Which country is the largest trading partner of India (as of recent data)?",
        options: [
          { value: "a", label: "China" },
          { value: "b", label: "USA" },
          { value: "c", label: "UAE" },
          { value: "d", label: "Russia" }
        ],
        answer: "a" // Based on recent data, though this can change
      },
      {
        question: "Which organization releases the Human Development Index (HDI)?",
        options: [
          { value: "a", label: "World Bank" },
          { value: "b", label: "IMF" },
          { value: "c", label: "United Nations Development Programme (UNDP)" },
          { value: "d", label: "ADB" }
        ],
        answer: "c"
      }
    ]
  };

  useEffect(() => {
    if (timerActive && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive]);

  const handleTimeUp = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerActive(false);
    calculateScore();
    setShowResults(true);
    toast({
      title: "Time's up!",
      description: "Your quiz time has expired.",
      variant: "destructive"
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStartQuiz = (moduleId: string, chapterIndex: number) => {
    console.log(`Attempting to start quiz for module ${moduleId}, chapter index ${chapterIndex}`);
    const module = modules.find(m => m.id === moduleId);
    if (!module) {
      console.error(`Module ${moduleId} not found`);
      return;
    }
    
    // Check if the chapter is premium (not in the free chapters)
    if (chapterIndex >= module.freeChapters) {
      toast({
        title: "Premium Content",
        description: "This quiz is available only for premium users. Upgrade to access all content.",
        variant: "destructive"
      });
      return;
    }
    
    const chapter = module.chapters[chapterIndex];
    console.log(`Starting quiz for chapter: ${chapter}`);
    
    if (quizQuestions[chapter as keyof typeof quizQuestions]) {
      setCurrentChapter(chapter);
      setSelectedAnswers({});
      setQuizSubmitted(false);
      setScore(0);
      setCurrentQuestionIndex(0);
      setTimeRemaining(15 * 60); // 15 minutes
      setTimerActive(true);
      setShowResults(false);
      setQuizOpen(true);
    } else {
      toast({
        title: "Quiz Not Available",
        description: `Quiz for "${chapter}" is coming soon!`,
        variant: "destructive"
      });
      console.log(`Quiz for ${chapter} not available yet`);
    }
  };

  const handleAnswerSelect = (questionIndex: number, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleNextQuestion = () => {
    if (!currentChapter) return;
    
    const questions = quizQuestions[currentChapter as keyof typeof quizQuestions];
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      checkSkippedQuestions();
    }
  };

  const handleSkipQuestion = () => {
    console.log(`Skipping question ${currentQuestionIndex + 1}`);
    
    if (currentChapter && currentQuestionIndex < quizQuestions[currentChapter as keyof typeof quizQuestions].length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      
      toast({
        title: "Question Skipped",
        description: "You can revisit skipped questions in the results.",
        variant: "default"
      });
    } else {
      // If this is the last question, show the skipped questions dialog or results
      checkSkippedQuestions();
    }
  };

  const handleSubmitQuiz = () => {
    checkSkippedQuestions();
  };

  const checkSkippedQuestions = () => {
    if (!currentChapter) return;
    
    const questions = quizQuestions[currentChapter as keyof typeof quizQuestions];
    const questionsCount = questions.length;
    const answeredCount = Object.keys(selectedAnswers).length;
    const skipped = questionsCount - answeredCount;
    
    setSkippedCount(skipped);
    
    if (skipped > 0) {
      setSkippedQuestionsAlert(true);
    } else {
      finishQuiz();
    }
  };

  const handleAlertConfirm = () => {
    setSkippedQuestionsAlert(false);
    finishQuiz();
  };

  const handleAlertCancel = () => {
    setSkippedQuestionsAlert(false);
    // Keep the quiz open but don't show results yet
  };

  const finishQuiz = () => {
    calculateScore();
    setShowResults(true);
    setTimerActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const calculateScore = () => {
    if (!currentChapter) return;
    
    const questions = quizQuestions[currentChapter as keyof typeof quizQuestions];
    let correctCount = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setQuizSubmitted(true);
  };

  const handleCloseQuiz = () => {
    setQuizOpen(false);
    setShowResults(false); // Reset show results when closing the quiz
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerActive(false);
  };

  const handleRetryQuiz = () => {
    if (!currentChapter) return;
    
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeRemaining(15 * 60);
    setTimerActive(true);
    setShowResults(false);
  };

  const currentQuestion = currentChapter && quizQuestions[currentChapter as keyof typeof quizQuestions]?.[currentQuestionIndex];
  
  const totalQuestions = currentChapter ? quizQuestions[currentChapter as keyof typeof quizQuestions]?.length : 0;
  const progressPercentage = totalQuestions ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

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
            <h1 className="text-3xl font-bold text-white">Indian Economy & Indian Financial System</h1>
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
                              <BookOpen size={20} className="text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{chapter}</h3>
                              <div className="flex items-center mt-1">
                                <Badge variant="outline" className="text-xs bg-white/10 mr-2">
                                  {index === 0 ? '30 questions' : 'Coming soon'}
                                </Badge>
                                {index >= module.freeChapters && (
                                  <Badge variant="outline" className="text-xs bg-amber-400/20 text-amber-300">
                                    <Lock size={12} className="mr-1" />
                                    Premium
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button 
                            type="button"
                            onClick={() => handleStartQuiz(module.id, index)}
                            variant={index < module.freeChapters ? "default" : "secondary"}
                            className={`whitespace-nowrap ${index >= module.freeChapters ? "bg-amber-500 hover:bg-amber-600" : ""}`}
                          >
                            {index < module.freeChapters ? (
                              chapter === 'Indian Economy – An Overview' ? 'Start Quiz' : 'Coming Soon'
                            ) : (
                              <><Lock size={14} className="mr-1" /> Premium</>
                            )}
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

        <Dialog open={quizOpen} onOpenChange={(open) => {
          if (!open) handleCloseQuiz();
          setQuizOpen(open);
        }}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center">
                <span>{currentChapter} Quiz</span>
                {timerActive && (
                  <div className="flex items-center text-sm font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                    <Clock className="mr-2 h-4 w-4" />
                    Time Remaining: {formatTime(timeRemaining)}
                  </div>
                )}
              </DialogTitle>
              <DialogDescription>
                {showResults 
                  ? `You scored ${score}/${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)`
                  : `Question ${currentQuestionIndex + 1} of ${totalQuestions}`
                }
              </DialogDescription>
              {!showResults && (
                <Progress value={progressPercentage} className="mt-2" />
              )}
            </DialogHeader>

            {!showResults && currentQuestion && (
              <div className="p-4 rounded-lg bg-gray-50 mb-6">
                <div className="flex items-start mb-4">
                  <span className="font-semibold mr-2">{currentQuestionIndex + 1}.</span>
                  <p className="font-medium">{currentQuestion.question}</p>
                </div>
                
                <RadioGroup
                  value={selectedAnswers[currentQuestionIndex] || ""}
                  onValueChange={(value) => handleAnswerSelect(currentQuestionIndex, value)}
                  className="space-y-3 ml-6"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.value}
                        id={`q${currentQuestionIndex}-${option.value}`}
                      />
                      <Label
                        htmlFor={`q${currentQuestionIndex}-${option.value}`}
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="mt-6 flex justify-between">
                  <Button 
                    onClick={handleSkipQuestion}
                    variant="outline"
                    className="flex items-center"
                  >
                    Skip <SkipForward className="ml-1 h-4 w-4" />
                  </Button>
                  
                  {currentQuestionIndex < totalQuestions - 1 ? (
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={!selectedAnswers[currentQuestionIndex]}
                      className="flex items-center"
                    >
                      Next<ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmitQuiz}
                      className="flex items-center"
                    >
                      Finish Quiz
                    </Button>
                  )}
                </div>
              </div>
            )}

            {showResults && (
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-blue-50 text-center">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Quiz Results</h3>
                  <p className="mb-2">You answered {score} out of {totalQuestions} questions correctly.</p>
                  <div className="text-3xl font-bold mb-4">
                    Score: {Math.round((score / totalQuestions) * 100)}%
                  </div>
                  <div className="space-y-2">
                    {score === totalQuestions ? (
                      <div className="flex items-center justify-center text-green-600">
                        <Check className="mr-2" /> Perfect score! Excellent work!
                      </div>
                    ) : score >= totalQuestions * 0.7 ? (
                      <p className="text-green-600">Good job! You've passed the quiz.</p>
                    ) : (
                      <div className="flex items-center justify-center text-amber-600">
                        <AlertTriangle className="mr-2" /> You might need to review this chapter again.
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Question Summary:</h4>
                  {currentChapter && quizQuestions[currentChapter as keyof typeof quizQuestions]?.map((question, qIndex) => (
                    <div key={qIndex} className={`p-3 rounded-lg ${selectedAnswers[qIndex] === question.answer ? 'bg-green-50' : selectedAnswers[qIndex] ? 'bg-red-50' : 'bg-gray-50'}`}>
                      <div className="flex items-start">
                        <span className="font-semibold mr-2">{qIndex + 1}.</span>
                        <div>
                          <p className="font-medium">{question.question}</p>
                          <div className="mt-1">
                            {!selectedAnswers[qIndex] ? (
                              <p className="text-gray-600 text-sm flex items-center">
                                Not answered
                              </p>
                            ) : selectedAnswers[qIndex] === question.answer ? (
                              <p className="text-green-600 text-sm flex items-center">
                                <Check className="mr-1 h-4 w-4" /> Correct: {question.options.find(opt => opt.value === question.answer)?.label}
                              </p>
                            ) : (
                              <div className="space-y-1 text-sm">
                                <p className="text-red-600">Your answer: {question.options.find(opt => opt.value === selectedAnswers[qIndex])?.label}</p>
                                <p className="text-green-600">Correct answer: {question.options.find(opt => opt.value === question.answer)?.label}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2 mt-4">
              <Button
                onClick={handleCloseQuiz}
                variant="outline"
              >
                Close
              </Button>
              {showResults && (
                <Button
                  onClick={handleRetryQuiz}
                >
                  Retry Quiz
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog open={skippedQuestionsAlert} onOpenChange={setSkippedQuestionsAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Skipped Questions</AlertDialogTitle>
              <AlertDialogDescription>
                You have skipped {skippedCount} question{skippedCount !== 1 ? 's' : ''}. 
                Would you like to continue and submit the quiz?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleAlertCancel}>
                Go Back to Quiz
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleAlertConfirm}>
                Submit Quiz
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default IndianEconomy;
