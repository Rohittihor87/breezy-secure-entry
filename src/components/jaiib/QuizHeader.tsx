
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type QuizHeaderProps = {
  chapterTitle: string;
  moduleTitle: string;
  moduleName: string;
  onExit: () => void;
};

const QuizHeader: React.FC<QuizHeaderProps> = ({ 
  chapterTitle, 
  moduleTitle, 
  moduleName,
  onExit 
}) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
      <Button 
        variant="ghost" 
        onClick={onExit}
        className="mb-4 md:mb-0"
      >
        <ArrowLeft className="mr-2" size={16} />
        Exit Quiz
      </Button>
      
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-bold mb-1">{chapterTitle}</h1>
        <p className="text-muted-foreground text-sm">
          {moduleTitle}: {moduleName}
        </p>
      </div>
    </div>
  );
};

export default QuizHeader;
