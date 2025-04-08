
import React from 'react';
import QuizTimer from './QuizTimer';
import { Progress } from '@/components/ui/progress';

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
  const progressPercentage = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm font-medium">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
        </div>
        <QuizTimer timeRemaining={timeRemaining} />
      </div>
      
      <Progress 
        value={progressPercentage} 
        className="h-2 bg-gray-200" 
      />
      
      <div className="flex justify-between text-xs mt-1 text-muted-foreground">
        <span>Start</span>
        <span>{progressPercentage}% Complete</span>
        <span>Finish</span>
      </div>
    </div>
  );
};

export default QuizProgress;
