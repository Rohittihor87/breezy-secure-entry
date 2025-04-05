
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import QuizQuestion, { QuizQuestionType } from './QuizQuestion';
import QuizResults from './QuizResults';
import QuizTimer from './QuizTimer';

type QuizModalProps = {
  quizOpen: boolean;
  setQuizOpen: (open: boolean) => void;
  handleCloseQuiz: () => void;
  currentChapter: string | null;
  timeRemaining: number;
  timerActive: boolean;
  showResults: boolean;
  quizSubmitted: boolean;
  score: number;
  totalQuestions: number;
  currentQuestionIndex: number;
  progressPercentage: number;
  currentQuestion: QuizQuestionType | undefined;
  selectedAnswers: Record<number, string>;
  handleAnswerSelect: (questionIndex: number, value: string) => void;
  handleNextQuestion: () => void;
  handleSubmitQuiz: () => void;
  handleSkipQuestion: () => void;
  handleRetryQuiz: () => void;
  quizQuestions: Record<string, QuizQuestionType[]>;
};

const QuizModal: React.FC<QuizModalProps> = ({
  quizOpen,
  setQuizOpen,
  handleCloseQuiz,
  currentChapter,
  timeRemaining,
  timerActive,
  showResults,
  quizSubmitted,
  score,
  totalQuestions,
  currentQuestionIndex,
  progressPercentage,
  currentQuestion,
  selectedAnswers,
  handleAnswerSelect,
  handleNextQuestion,
  handleSubmitQuiz,
  handleSkipQuestion,
  handleRetryQuiz,
  quizQuestions
}) => {
  return (
    <Dialog 
      open={quizOpen} 
      onOpenChange={(open) => {
        if (!open) handleCloseQuiz();
        setQuizOpen(open);
      }}
    >
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>{currentChapter} Quiz</span>
            {timerActive && !showResults && (
              <QuizTimer timeRemaining={timeRemaining} />
            )}
          </DialogTitle>
          <DialogDescription>
            {quizSubmitted || showResults 
              ? `You scored ${score}/${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)`
              : `Question ${currentQuestionIndex + 1} of ${totalQuestions}`
            }
          </DialogDescription>
        </DialogHeader>

        {!showResults && !quizSubmitted && currentQuestion && (
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

        {(showResults || quizSubmitted) && (
          <QuizResults
            score={score}
            totalQuestions={totalQuestions}
            currentChapter={currentChapter}
            selectedAnswers={selectedAnswers}
            questions={quizQuestions}
          />
        )}

        <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2 mt-4">
          <Button
            onClick={handleCloseQuiz}
            variant="outline"
          >
            Close
          </Button>
          {(showResults || quizSubmitted) && (
            <Button
              onClick={handleRetryQuiz}
            >
              Retry Quiz
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
