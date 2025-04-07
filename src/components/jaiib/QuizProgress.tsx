
import React from 'react';
import QuizTimer from './QuizTimer';

type QuizProgressProps = {
  currentQuestionIndex: number;
  totalQuestions: number;
  timeRemaining: number;
};

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestionIndex,
  totalQuestions,
  timeRemaining,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="text-sm font-medium mb-1">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
      </div>
      <QuizTimer timeRemaining={timeRemaining} />
    </div>
  );
};

export default QuizProgress;
