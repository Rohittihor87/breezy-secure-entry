
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

// Import custom components
import ModuleCard from '@/components/jaiib/ModuleCard';
import QuizModal from '@/components/jaiib/QuizModal';

// Import data and hooks
import { modules } from '@/data/jaiib/modules';
import { quizQuestions } from '@/data/jaiib/quizQuestions';
import { useQuiz } from '@/hooks/jaiib/useQuiz';

const IndianEconomy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('module-a');
  
  const {
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
  } = useQuiz({ quizQuestions });

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
              <ModuleCard 
                module={module} 
                onStartQuiz={handleStartQuiz}
              />
            </TabsContent>
          ))}
        </Tabs>

        <QuizModal
          quizOpen={quizOpen}
          setQuizOpen={setQuizOpen}
          handleCloseQuiz={handleCloseQuiz}
          currentChapter={currentChapter}
          timeRemaining={timeRemaining}
          timerActive={timerActive}
          showResults={showResults}
          quizSubmitted={quizSubmitted}
          score={score}
          totalQuestions={totalQuestions}
          currentQuestionIndex={currentQuestionIndex}
          progressPercentage={progressPercentage}
          currentQuestion={currentQuestion}
          selectedAnswers={selectedAnswers}
          handleAnswerSelect={handleAnswerSelect}
          handleNextQuestion={handleNextQuestion}
          handleSubmitQuiz={handleSubmitQuiz}
          handleSkipQuestion={handleSkipQuestion}
          handleRetryQuiz={handleRetryQuiz}
          quizQuestions={quizQuestions}
        />

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
