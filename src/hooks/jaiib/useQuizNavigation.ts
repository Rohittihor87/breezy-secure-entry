
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export const useQuizNavigation = (totalQuestions: number) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const progressPercentage = totalQuestions ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      return true;
    }
    return false;
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      
      toast({
        title: "Question Skipped",
        description: "You can revisit skipped questions in the results.",
        variant: "default"
      });
      return true;
    }
    return false;
  };

  const resetNavigation = () => {
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setQuizSubmitted(false);
  };

  const finishQuiz = () => {
    setQuizSubmitted(true);
    setShowResults(true);
  };

  return {
    currentQuestionIndex,
    showResults,
    quizSubmitted,
    progressPercentage,
    handleNextQuestion,
    handleSkipQuestion,
    resetNavigation,
    finishQuiz,
    setQuizSubmitted
  };
};
