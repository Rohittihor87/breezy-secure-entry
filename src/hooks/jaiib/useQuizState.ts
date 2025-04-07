
import { useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";
import { QuizQuestionType } from '@/components/jaiib/QuizQuestion';

type UseQuizStateProps = {
  totalQuestions: number;
  questions: QuizQuestionType[];
  onTimeUp: () => void;
};

export const useQuizState = ({ totalQuestions, questions, onTimeUp }: UseQuizStateProps) => {
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

  const progressPercentage = totalQuestions ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  const currentQuestion = questions?.[currentQuestionIndex];

  // Timer effect
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

      return () => {
        clearInterval(intervalId);
        setTimerRef(null);
      };
    }
  }, [timerActive, timeRemaining]);

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

  const stopTimer = () => {
    if (timerRef) {
      clearInterval(timerRef);
      setTimerRef(null);
    }
    setTimerActive(false);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeRemaining(15 * 60);
    setTimerActive(true);
    setShowResults(false);
  };

  return {
    selectedAnswers,
    currentQuestionIndex,
    timeRemaining,
    timerActive,
    quizSubmitted,
    showResults,
    skippedQuestionsAlert,
    skippedCount,
    score,
    progressPercentage,
    currentQuestion,
    handleAnswerSelect,
    handleNextQuestion,
    handleSkipQuestion,
    handleSubmitQuiz,
    handleAlertConfirm,
    handleAlertCancel,
    stopTimer,
    resetQuiz,
    setSkippedQuestionsAlert
  };
};
