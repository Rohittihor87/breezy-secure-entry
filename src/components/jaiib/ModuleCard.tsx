
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Lock } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

type ChapterProps = {
  title: string;
  index: number;
  freeChapters: number;
  moduleId: string;
};

export const ChapterItem = ({ 
  title, 
  index, 
  freeChapters, 
  moduleId,
}: ChapterProps) => {
  const navigate = useNavigate();
  const isPremium = index >= freeChapters;
  
  const handleStartQuiz = () => {
    // Check if the chapter is premium
    if (isPremium) {
      toast({
        title: "Premium Content",
        description: "This quiz is available only for premium users. Upgrade to access all content.",
        variant: "destructive"
      });
      return;
    }
    
    // If not the first chapter, show coming soon message
    if (title !== 'Indian Economy – An Overview') {
      toast({
        title: "Quiz Not Available",
        description: `Quiz for "${title}" is coming soon!`,
        variant: "destructive"
      });
      return;
    }
    
    // Navigate to the quiz page with state
    navigate('/jaiib/quiz', {
      state: {
        moduleId,
        chapterIndex: index,
        chapterTitle: title
      }
    });
  };
  
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
          onClick={handleStartQuiz}
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
};

const ModuleCard = ({ module }: ModuleCardProps) => {
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
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
