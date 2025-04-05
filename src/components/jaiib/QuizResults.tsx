
import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import { QuizQuestionType } from './QuizQuestion';

type QuizResultsProps = {
  score: number;
  totalQuestions: number;
  currentChapter: string | null;
  selectedAnswers: Record<number, string>;
  questions: Record<string, QuizQuestionType[]>;
};

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  currentChapter,
  selectedAnswers,
  questions
}) => {
  if (!currentChapter) return null;
  
  const chapterQuestions = questions[currentChapter as keyof typeof questions];
  const scorePercentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-blue-50 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-2">Quiz Results</h3>
        <p className="mb-2">You answered {score} out of {totalQuestions} questions correctly.</p>
        <div className="text-3xl font-bold mb-4">
          Score: {scorePercentage}%
        </div>
        <div className="space-y-2">
          {score === totalQuestions ? (
            <div className="flex items-center justify-center text-green-600">
              <Check className="mr-2" /> Perfect score! Excellent work!
            </div>
          ) : score >= totalQuestions * 0.7 ? (
            <p className="text-green-600">Good job! You've passed the quiz.</p>
          ) : (
            <div className="flex items-center justify-center text-amber-600">
              <AlertTriangle className="mr-2" /> You might need to review this chapter again.
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-lg">Question Summary:</h4>
        {chapterQuestions?.map((question, qIndex) => (
          <div 
            key={qIndex} 
            className={`p-3 rounded-lg ${
              selectedAnswers[qIndex] === question.answer 
                ? 'bg-green-50' 
                : selectedAnswers[qIndex] 
                  ? 'bg-red-50' 
                  : 'bg-gray-50'
            }`}
          >
            <div className="flex items-start">
              <span className="font-semibold mr-2">{qIndex + 1}.</span>
              <div>
                <p className="font-medium">{question.question}</p>
                <div className="mt-1">
                  {!selectedAnswers[qIndex] ? (
                    <p className="text-gray-600 text-sm flex items-center">
                      Not answered
                    </p>
                  ) : selectedAnswers[qIndex] === question.answer ? (
                    <p className="text-green-600 text-sm flex items-center">
                      <Check className="mr-1 h-4 w-4" /> Correct: {question.options.find(opt => opt.value === question.answer)?.label}
                    </p>
                  ) : (
                    <div className="space-y-1 text-sm">
                      <p className="text-red-600">Your answer: {question.options.find(opt => opt.value === selectedAnswers[qIndex])?.label}</p>
                      <p className="text-green-600">Correct answer: {question.options.find(opt => opt.value === question.answer)?.label}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizResults;
