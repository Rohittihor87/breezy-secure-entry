import { useState, useRef, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";
import { QuizQuestionType } from '@/components/jaiib/QuizQuestion';
import { QuizQuestionsData } from '@/data/jaiib/quizQuestions';
import { modules } from '@/data/jaiib/modules';

type UseQuizProps = {
  quizQuestions: QuizQuestionsData;
};

export const useQuiz = ({ quizQuestions }: UseQuizProps) => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const [timerRef, setTimerRef] = useState<NodeJS.Timeout | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [skippedQuestionsAlert, setSkippedQuestionsAlert] = useState(false);
  const [skippedCount, setSkippedCount] = useState(0);

  useEffect(() => {
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
    }

    return () => {
      if (timerRef) {
        clearInterval(timerRef);
        setTimerRef(null);
      }
    };
  }, [timerActive]);

  const handleTimeUp = () => {
    if (timerRef) {
      clearInterval(timerRef);
      setTimerRef(null);
    }
    setTimerActive(false);
    finishQuiz();
    toast({
      title: "Time's up!",
      description: "Your quiz time has expired.",
      variant: "destructive"
    });
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
    
    console.log('Quiz finished, results should be shown.');
    console.log('showResults state:', showResults);
    console.log('quizSubmitted state:', quizSubmitted);
  };

  const handleCloseQuiz = () => {
    if (timerRef) {
      clearInterval(timerRef);
      setTimerRef(null);
    }
    setTimerActive(false);
    
    setQuizOpen(false);
    
    setTimeout(() => {
      setShowResults(false);
      setQuizSubmitted(false);
      setSelectedAnswers({});
      setCurrentQuestionIndex(0);
    }, 100);
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

  return {
    quizOpen,
    setQuizOpen,
    currentChapter,
    selectedAnswers,
    quizSubmitted,
    score,
    currentQuestionIndex,
    timeRemaining,
    timerActive,
    showResults,
    skippedQuestionsAlert,
    setSkippedQuestionsAlert,
    skippedCount,
    currentQuestion,
    totalQuestions,
    progressPercentage,
    handleStartQuiz,
    handleAnswerSelect,
    handleNextQuestion,
    handleSkipQuestion,
    handleSubmitQuiz,
    handleAlertConfirm,
    handleAlertCancel,
    handleCloseQuiz,
    handleRetryQuiz
  };
};

export default useQuiz;
