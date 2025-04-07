
import { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { quizQuestions } from '@/data/jaiib/quizQuestions';
import { modules } from '@/data/jaiib/modules';
import QuizQuestion from '@/components/jaiib/QuizQuestion';
import QuizResults from '@/components/jaiib/QuizResults';
import QuizHeader from '@/components/jaiib/QuizHeader';
import QuizProgress from '@/components/jaiib/QuizProgress';
import SkippedQuestionsAlert from '@/components/jaiib/SkippedQuestionsAlert';
import QuizResultActions from '@/components/jaiib/QuizResultActions';
import { useQuizState } from '@/hooks/jaiib/useQuizState';

// Define interface for location state
interface LocationState {
  moduleId: string;
  chapterIndex: number;
  chapterTitle: string;
  returnPath?: string; // Add returnPath to track where user came from
}

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  
  // Extract quiz parameters from location state
  const { moduleId, chapterIndex, chapterTitle, returnPath } = state || {};
  
  // Find the module and chapter
  const module = modules.find(m => m.id === moduleId);
  const chapter = module?.chapters[chapterIndex];
  
  // Get the questions for this chapter
  const questions = chapter ? quizQuestions[chapter as keyof typeof quizQuestions] : [];
  const totalQuestions = questions?.length || 0;
  
  // Redirect if no valid data
  useEffect(() => {
    if (!chapter || !module) {
      // If no valid chapter data, redirect back
      navigate(returnPath || `/jaiib/${module?.id.replace('module-', '') || 'indian-economy'}`);
    }
  }, [chapter, module, navigate, returnPath]);

  const finishQuiz = () => {
    // This function will be called when the timer ends
    quizState.handleSubmitQuiz();
  };

  const quizState = useQuizState({
    totalQuestions,
    questions,
    onTimeUp: finishQuiz
  });

  const handleExitQuiz = () => {
    quizState.stopTimer();
    
    // Navigate back to the subject page, using returnPath if available
    navigate(returnPath || `/jaiib/${module?.id.replace('module-', '') || 'indian-economy'}`);
  };

  if (!module || !chapter) {
    return <div className="p-8 text-center">Quiz not found. Redirecting...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-primary/30 to-background p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <QuizHeader 
          chapterTitle={chapterTitle}
          moduleTitle={module.title}
          moduleName={module.name}
          onExit={handleExitQuiz}
        />
        
        <QuizProgress 
          currentQuestionIndex={quizState.currentQuestionIndex}
          totalQuestions={totalQuestions}
          timeRemaining={quizState.timeRemaining}
        />
        
        {!quizState.showResults ? (
          <>
            {quizState.currentQuestion && (
              <QuizQuestion
                currentQuestion={quizState.currentQuestion}
                currentQuestionIndex={quizState.currentQuestionIndex}
                totalQuestions={totalQuestions}
                selectedAnswers={quizState.selectedAnswers}
                handleAnswerSelect={quizState.handleAnswerSelect}
                handleNextQuestion={quizState.handleNextQuestion}
                handleSubmitQuiz={quizState.handleSubmitQuiz}
                handleSkipQuestion={quizState.handleSkipQuestion}
                progressPercentage={quizState.progressPercentage}
              />
            )}
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
            <QuizResults
              score={quizState.score}
              totalQuestions={totalQuestions}
              currentChapter={chapter}
              selectedAnswers={quizState.selectedAnswers}
              questions={quizQuestions}
            />
            
            <QuizResultActions 
              onExit={handleExitQuiz}
              onRetry={quizState.resetQuiz}
            />
          </div>
        )}
        
        <SkippedQuestionsAlert 
          open={quizState.skippedQuestionsAlert}
          skippedCount={quizState.skippedCount}
          onOpenChange={quizState.setSkippedQuestionsAlert}
          onConfirm={quizState.handleAlertConfirm}
          onCancel={quizState.handleAlertCancel}
        />
      </div>
    </div>
  );
};

export default QuizPage;
