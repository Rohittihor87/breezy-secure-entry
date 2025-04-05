
import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronRight, SkipForward } from 'lucide-react';

export type QuizQuestionType = {
  question: string;
  options: {
    value: string;
    label: string;
  }[];
  answer: string;
};

type QuizQuestionProps = {
  currentQuestion: QuizQuestionType;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswers: Record<number, string>;
  handleAnswerSelect: (questionIndex: number, value: string) => void;
  handleNextQuestion: () => void;
  handleSubmitQuiz: () => void;
  handleSkipQuestion: () => void;
  progressPercentage: number;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswers,
  handleAnswerSelect,
  handleNextQuestion,
  handleSubmitQuiz,
  handleSkipQuestion,
  progressPercentage
}) => {
  return (
    <>
      <Progress value={progressPercentage} className="mt-2" />
      <div className="p-4 rounded-lg bg-gray-50 mb-6">
        <div className="flex items-start mb-4">
          <span className="font-semibold mr-2">{currentQuestionIndex + 1}.</span>
          <p className="font-medium">{currentQuestion.question}</p>
        </div>
        
        <RadioGroup
          value={selectedAnswers[currentQuestionIndex] || ""}
          onValueChange={(value) => handleAnswerSelect(currentQuestionIndex, value)}
          className="space-y-3 ml-6"
        >
          {currentQuestion.options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option.value}
                id={`q${currentQuestionIndex}-${option.value}`}
              />
              <Label
                htmlFor={`q${currentQuestionIndex}-${option.value}`}
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-6 flex justify-between">
          <Button 
            onClick={handleSkipQuestion}
            variant="outline"
            className="flex items-center"
          >
            Skip <SkipForward className="ml-1 h-4 w-4" />
          </Button>
          
          {currentQuestionIndex < totalQuestions - 1 ? (
            <Button 
              onClick={handleNextQuestion}
              disabled={!selectedAnswers[currentQuestionIndex]}
              className="flex items-center"
            >
              Next<ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmitQuiz}
              className="flex items-center"
            >
              Finish Quiz
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;
