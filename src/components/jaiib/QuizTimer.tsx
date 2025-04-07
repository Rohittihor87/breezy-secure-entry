
import React, { useMemo } from 'react';
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

  // Set appropriate color based on time remaining
  const timerClassNames = useMemo(() => {
    if (timeRemaining <= 60) { // Last minute
      return "bg-red-100 text-red-800 animate-pulse";
    } else if (timeRemaining <= 300) { // Last 5 minutes
      return "bg-amber-100 text-amber-800";
    }
    return "bg-orange-100 text-orange-800";
  }, [timeRemaining]);

  return (
    <div className={`flex items-center text-sm font-medium ${timerClassNames} px-3 py-1 rounded-full`}>
      <Clock className="mr-2 h-4 w-4" />
      Time Remaining: {formatTime(timeRemaining)}
    </div>
  );
};

export default QuizTimer;
