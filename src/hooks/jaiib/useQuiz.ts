
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { QuizQuestionsData } from '@/data/jaiib/quizQuestions';
import { modules } from '@/data/jaiib/modules';
import { useQuizTimer } from './useQuizTimer';
import { useQuizAnswers } from './useQuizAnswers';
import { useQuizNavigation } from './useQuizNavigation';

type UseQuizProps = {
  quizQuestions: QuizQuestionsData;
};

export const useQuiz = ({ quizQuestions }: UseQuizProps) => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<string | null>(null);
  
  // Get total questions for current chapter
  const totalQuestions = currentChapter ? quizQuestions[currentChapter as keyof typeof quizQuestions]?.length : 0;
  
  // Initialize sub-hooks
  const { 
    selectedAnswers, 
    score, 
    skippedCount, 
    skippedQuestionsAlert, 
    setSkippedQuestionsAlert,
    handleAnswerSelect, 
    checkSkippedQuestions, 
    calculateScore, 
    resetAnswers 
  } = useQuizAnswers();
  
  const {
    currentQuestionIndex,
    showResults,
    quizSubmitted,
    progressPercentage,
    handleNextQuestion,
    handleSkipQuestion: navigateToNextQuestion,
    resetNavigation,
    finishQuiz,
    setQuizSubmitted
  } = useQuizNavigation(totalQuestions);
  
  const { 
    timeRemaining, 
    timerActive, 
    startTimer, 
    stopTimer, 
    resetTimer 
  } = useQuizTimer({ 
    onTimeUp: () => {
      if (currentChapter) {
        const questions = quizQuestions[currentChapter as keyof typeof quizQuestions];
        calculateScore(questions);
        finishQuiz();
      }
    }
  });

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
      resetAnswers();
      resetNavigation();
      resetTimer();
      startTimer();
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

  const handleSubmitQuiz = () => {
    if (!currentChapter) return;
    
    const hasSkipped = checkSkippedQuestions(totalQuestions);
    if (!hasSkipped) {
      completeQuiz();
    }
  };

  const handleSkipQuestion = () => {
    navigateToNextQuestion();
  };

  const handleAlertConfirm = () => {
    setSkippedQuestionsAlert(false);
    completeQuiz();
  };

  const handleAlertCancel = () => {
    setSkippedQuestionsAlert(false);
  };

  const completeQuiz = () => {
    if (!currentChapter) return;
    
    const questions = quizQuestions[currentChapter as keyof typeof quizQuestions];
    calculateScore(questions);
    finishQuiz();
    stopTimer();
  };

  const handleCloseQuiz = () => {
    stopTimer();
    setQuizOpen(false);
    
    setTimeout(() => {
      resetNavigation();
      resetAnswers();
    }, 100);
  };

  const handleRetryQuiz = () => {
    if (!currentChapter) return;
    
    resetAnswers();
    resetNavigation();
    resetTimer();
    startTimer();
  };

  // Get current question
  const currentQuestion = currentChapter && quizQuestions[currentChapter as keyof typeof quizQuestions]?.[currentQuestionIndex];

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
