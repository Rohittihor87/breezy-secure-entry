
import React from 'react';
import { Button } from '@/components/ui/button';

type QuizResultActionsProps = {
  onExit: () => void;
  onRetry: () => void;
};

const QuizResultActions: React.FC<QuizResultActionsProps> = ({
  onExit,
  onRetry,
}) => {
  return (
    <div className="mt-8 flex justify-between">
      <Button 
        variant="outline" 
        onClick={onExit}
      >
        Exit
      </Button>
      
      <Button 
        onClick={onRetry}
      >
        Try Again
      </Button>
    </div>
  );
};

export default QuizResultActions;
