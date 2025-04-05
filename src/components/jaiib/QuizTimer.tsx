
import React from 'react';
import { Clock } from 'lucide-react';

type QuizTimerProps = {
  timeRemaining: number;
};

const QuizTimer: React.FC<QuizTimerProps> = ({ timeRemaining }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center text-sm font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
      <Clock className="mr-2 h-4 w-4" />
      Time Remaining: {formatTime(timeRemaining)}
    </div>
  );
};

export default QuizTimer;
