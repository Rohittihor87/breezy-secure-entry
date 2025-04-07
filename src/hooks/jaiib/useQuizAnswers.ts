
import { useState } from 'react';
import { QuizQuestionType } from '@/components/jaiib/QuizQuestion';

export const useQuizAnswers = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [skippedQuestionsAlert, setSkippedQuestionsAlert] = useState(false);

  const handleAnswerSelect = (questionIndex: number, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const checkSkippedQuestions = (totalQuestions: number) => {
    const answeredCount = Object.keys(selectedAnswers).length;
    const skipped = totalQuestions - answeredCount;
    
    setSkippedCount(skipped);
    
    if (skipped > 0) {
      setSkippedQuestionsAlert(true);
      return true;
    }
    return false;
  };

  const calculateScore = (questions: QuizQuestionType[]) => {
    let correctCount = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    return correctCount;
  };

  const resetAnswers = () => {
    setSelectedAnswers({});
    setScore(0);
    setSkippedCount(0);
  };

  return {
    selectedAnswers,
    score,
    skippedCount,
    skippedQuestionsAlert,
    setSkippedQuestionsAlert,
    handleAnswerSelect,
    checkSkippedQuestions,
    calculateScore,
    resetAnswers
  };
};
