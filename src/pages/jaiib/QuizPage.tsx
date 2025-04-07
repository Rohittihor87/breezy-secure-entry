
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import QuizQuestion from '@/components/jaiib/QuizQuestion';
import QuizTimer from '@/components/jaiib/QuizTimer';
import QuizResults from '@/components/jaiib/QuizResults';
import { quizQuestions } from '@/data/jaiib/quizQuestions';
import { modules } from '@/data/jaiib/modules';
import { toast } from "@/hooks/use-toast";

// Define interface for location state
interface LocationState {
  moduleId: string;
  chapterIndex: number;
  chapterTitle: string;
}

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  
  // Extract quiz parameters from location state
  const { moduleId, chapterIndex, chapterTitle } = state || {};
  
  // Find the module and chapter
  const module = modules.find(m => m.id === moduleId);
  const chapter = module?.chapters[chapterIndex];
  
  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes
  const [timerActive, setTimerActive] = useState(true);
  const [timerRef, setTimerRef] = useState<NodeJS.Timeout | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [skippedQuestionsAlert, setSkippedQuestionsAlert] = useState(false);
  const [skippedCount, setSkippedCount] = useState(0);
  const [score, setScore] = useState(0);

  // Get the questions for this chapter
  const questions = chapter ? quizQuestions[chapter as keyof typeof quizQuestions] : [];
  const totalQuestions = questions?.length || 0;
  const progressPercentage = totalQuestions ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  const currentQuestion = questions?.[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    if (!chapter || !module) {
      // If no valid chapter data, redirect back
      navigate(`/jaiib/${module?.id.replace('module-', '') || 'indian-economy'}`);
      return;
    }

    if (timerActive && timeRemaining > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setTimerRef(null);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerRef(intervalId);

      return () => {
        clearInterval(intervalId);
        setTimerRef(null);
      };
    }
  }, [timerActive, timeRemaining, chapter, module]);

  const handleTimeUp = () => {
    setTimerActive(false);
    finishQuiz();
    toast({
      title: "Time's up!",
      description: "Your quiz time has expired.",
      variant: "destructive"
    });
  };

  const handleAnswerSelect = (questionIndex: number, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      checkSkippedQuestions();
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
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
    const questionsCount = totalQuestions;
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
  };

  const calculateScore = () => {
    let correctCount = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    setScore(correctCount);
  };

  const finishQuiz = () => {
    calculateScore();
    setQuizSubmitted(true);
    setShowResults(true);
    setTimerActive(false);
    
    if (timerRef) {
      clearInterval(timerRef);
      setTimerRef(null);
    }
  };

  const handleExitQuiz = () => {
    if (timerRef) {
      clearInterval(timerRef);
      setTimerRef(null);
    }
    
    // Navigate back to the subject page
    navigate(`/jaiib/${module?.id.replace('module-', '') || 'indian-economy'}`);
  };

  const handleRetryQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeRemaining(15 * 60);
    setTimerActive(true);
    setShowResults(false);
  };

  if (!module || !chapter) {
    return <div className="p-8 text-center">Quiz not found. Redirecting...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-primary/30 to-background p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <Button 
            variant="ghost" 
            onClick={handleExitQuiz}
            className="mb-4 md:mb-0"
          >
            <ArrowLeft className="mr-2" size={16} />
            Exit Quiz
          </Button>
          
          <div className="flex flex-col items-end">
            <h1 className="text-2xl font-bold mb-1">{chapterTitle}</h1>
            <p className="text-muted-foreground text-sm">
              {module.title}: {module.name}
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm font-medium mb-1">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
          </div>
          <QuizTimer timeRemaining={timeRemaining} />
        </div>
        
        {!showResults ? (
          <>
            {currentQuestion && (
              <QuizQuestion
                currentQuestion={currentQuestion}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={totalQuestions}
                selectedAnswers={selectedAnswers}
                handleAnswerSelect={handleAnswerSelect}
                handleNextQuestion={handleNextQuestion}
                handleSubmitQuiz={handleSubmitQuiz}
                handleSkipQuestion={handleSkipQuestion}
                progressPercentage={progressPercentage}
              />
            )}
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
            <QuizResults
              score={score}
              totalQuestions={totalQuestions}
              currentChapter={chapter}
              selectedAnswers={selectedAnswers}
              questions={quizQuestions}
            />
            
            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleExitQuiz}
              >
                Exit
              </Button>
              
              <Button 
                onClick={handleRetryQuiz}
              >
                Try Again
              </Button>
            </div>
          </div>
        )}
        
        <AlertDialog open={skippedQuestionsAlert} onOpenChange={setSkippedQuestionsAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                Skipped Questions
              </AlertDialogTitle>
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

export default QuizPage;
