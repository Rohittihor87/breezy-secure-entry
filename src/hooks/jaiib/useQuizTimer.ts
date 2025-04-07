
import { useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";

type UseQuizTimerProps = {
  onTimeUp: () => void;
  initialTime?: number;
};

export const useQuizTimer = ({ onTimeUp, initialTime = 15 * 60 }: UseQuizTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [timerRef, setTimerRef] = useState<NodeJS.Timeout | null>(null);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (timerActive && timeRemaining > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setTimerRef(null);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerRef(intervalId);

      return () => {
        clearInterval(intervalId);
        setTimerRef(null);
      };
    }
  }, [timerActive, timeRemaining]);

  const handleTimeUp = () => {
    if (timerRef) {
      clearInterval(timerRef);
      setTimerRef(null);
    }
    setTimerActive(false);
    onTimeUp();
    
    toast({
      title: "Time's up!",
      description: "Your quiz time has expired.",
      variant: "destructive"
    });
  };

  const startTimer = () => {
    setTimerActive(true);
  };

  const stopTimer = () => {
    if (timerRef) {
      clearInterval(timerRef);
      setTimerRef(null);
    }
    setTimerActive(false);
  };

  const resetTimer = (newTime: number = initialTime) => {
    stopTimer();
    setTimeRemaining(newTime);
  };

  return {
    timeRemaining,
    timerActive,
    startTimer,
    stopTimer,
    resetTimer
  };
};
