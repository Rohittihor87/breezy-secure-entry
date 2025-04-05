
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Lock } from 'lucide-react';

type ChapterProps = {
  title: string;
  index: number;
  freeChapters: number;
  moduleId: string;
  onStartQuiz: (moduleId: string, chapterIndex: number) => void;
};

export const ChapterItem = ({ 
  title, 
  index, 
  freeChapters, 
  moduleId, 
  onStartQuiz 
}: ChapterProps) => {
  const isPremium = index >= freeChapters;
  
  return (
    <Card className="bg-white/10 border-none">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <BookOpen size={20} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="text-xs bg-white/10 mr-2">
                {index === 0 ? '30 questions' : 'Coming soon'}
              </Badge>
              {isPremium && (
                <Badge variant="outline" className="text-xs bg-amber-400/20 text-amber-300">
                  <Lock size={12} className="mr-1" />
                  Premium
                </Badge>
              )}
            </div>
          </div>
        </div>
        <Button 
          type="button"
          onClick={() => onStartQuiz(moduleId, index)}
          variant={index < freeChapters ? "default" : "secondary"}
          className={`whitespace-nowrap ${isPremium ? "bg-amber-500 hover:bg-amber-600" : ""}`}
        >
          {index < freeChapters ? (
            title === 'Indian Economy – An Overview' ? 'Start Quiz' : 'Coming Soon'
          ) : (
            <><Lock size={14} className="mr-1" /> Premium</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

type ModuleCardProps = {
  module: {
    id: string;
    title: string;
    name: string;
    chapters: string[];
    freeChapters: number;
  };
  onStartQuiz: (moduleId: string, chapterIndex: number) => void;
};

const ModuleCard = ({ module, onStartQuiz }: ModuleCardProps) => {
  return (
    <Card className="bg-white/5 text-white border-none shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">
            {module.title}: {module.name}
          </h2>
          <p className="text-auth-light mb-6">
            Study each chapter and take the quiz to test your knowledge.
          </p>
        </div>
        
        <div className="space-y-4">
          {module.chapters.map((chapter, index) => (
            <ChapterItem
              key={index}
              title={chapter}
              index={index}
              freeChapters={module.freeChapters}
              moduleId={module.id}
              onStartQuiz={onStartQuiz}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
