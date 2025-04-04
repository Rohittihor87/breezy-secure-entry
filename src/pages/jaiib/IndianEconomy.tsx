
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const IndianEconomy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('module-a');
  const [quizOpen, setQuizOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  // Quiz questions for Indian Economy – An Overview
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

  const handleStartQuiz = (moduleId: string, chapterIndex: number) => {
    const chapter = modules.find(m => m.id === moduleId)?.chapters[chapterIndex];
    if (chapter && quizQuestions[chapter as keyof typeof quizQuestions]) {
      setCurrentChapter(chapter);
      setSelectedAnswers({});
      setQuizSubmitted(false);
      setScore(0);
      setShowCorrectAnswers(false);
      setQuizOpen(true);
    } else {
      console.log(`Quiz for ${chapter} not available yet`);
    }
  };

  const handleAnswerSelect = (questionIndex: number, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleSubmitQuiz = () => {
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
                              <Badge variant="outline" className="text-xs mt-1 bg-white/10">
                                {chapter === 'Indian Economy – An Overview' ? '30 questions' : '30 questions'}
                              </Badge>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleStartQuiz(module.id, index)}
                            className="whitespace-nowrap"
                            disabled={!quizQuestions[chapter as keyof typeof quizQuestions] && chapter !== 'Indian Economy – An Overview'}
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

        {/* Quiz Dialog */}
        <Dialog open={quizOpen} onOpenChange={setQuizOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle>{currentChapter} Quiz</DialogTitle>
              <DialogDescription>
                {quizSubmitted 
                  ? `You scored ${score}/${currentChapter && quizQuestions[currentChapter as keyof typeof quizQuestions]?.length || 0} (${Math.round((score / (currentChapter && quizQuestions[currentChapter as keyof typeof quizQuestions]?.length || 1)) * 100)}%)`
                  : 'Answer all 30 questions to test your knowledge.'}
              </DialogDescription>
            </DialogHeader>

            {currentChapter && quizQuestions[currentChapter as keyof typeof quizQuestions]?.map((question, qIndex) => (
              <div key={qIndex} className={`mb-6 p-4 rounded-lg ${quizSubmitted ? (selectedAnswers[qIndex] === question.answer ? 'bg-green-50' : 'bg-red-50') : 'bg-gray-50'}`}>
                <div className="flex items-start mb-3">
                  <span className="font-semibold mr-2">{qIndex + 1}.</span>
                  <p className="font-medium">{question.question}</p>
                </div>
                
                <RadioGroup
                  value={selectedAnswers[qIndex] || ""}
                  onValueChange={(value) => handleAnswerSelect(qIndex, value)}
                  disabled={quizSubmitted}
                  className="space-y-2 ml-6"
                >
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.value}
                        id={`q${qIndex}-${option.value}`}
                        className={quizSubmitted && option.value === question.answer ? 'border-green-500 text-green-500' : ''}
                      />
                      <Label
                        htmlFor={`q${qIndex}-${option.value}`}
                        className={`${
                          quizSubmitted && option.value === question.answer
                            ? 'text-green-700 font-medium'
                            : quizSubmitted && selectedAnswers[qIndex] === option.value && selectedAnswers[qIndex] !== question.answer
                            ? 'text-red-700 line-through'
                            : ''
                        }`}
                      >
                        {option.label}
                        {quizSubmitted && option.value === question.answer && (
                          <Check className="inline-block ml-2 h-4 w-4 text-green-600" />
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {quizSubmitted && (
                  <div className="mt-2 ml-6 text-sm">
                    {selectedAnswers[qIndex] === question.answer ? (
                      <p className="text-green-600">Correct!</p>
                    ) : (
                      <p className="text-red-600">
                        Incorrect! The correct answer is: {
                          question.options.find(opt => opt.value === question.answer)?.label
                        }
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}

            <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2">
              <div className="flex items-center gap-2">
                {quizSubmitted && (
                  <Button
                    onClick={() => {
                      setShowCorrectAnswers(!showCorrectAnswers);
                    }}
                    variant="outline"
                  >
                    {showCorrectAnswers ? "Hide Answers" : "Show All Correct Answers"}
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setQuizOpen(false)}
                  variant="outline"
                >
                  Close
                </Button>
                {!quizSubmitted && (
                  <Button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < (currentChapter && quizQuestions[currentChapter as keyof typeof quizQuestions]?.length || 0)}
                  >
                    Submit Quiz
                  </Button>
                )}
                {quizSubmitted && (
                  <Button
                    onClick={() => {
                      setSelectedAnswers({});
                      setQuizSubmitted(false);
                      setScore(0);
                      setShowCorrectAnswers(false);
                    }}
                  >
                    Retry Quiz
                  </Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default IndianEconomy;
