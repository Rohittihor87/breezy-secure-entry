
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

type QuizResultActionsProps = {
  onExit: () => void;
  onRetry: () => void;
};

const QuizResultActions: React.FC<QuizResultActionsProps> = ({
  onExit,
  onRetry,
}) => {
  const handleShare = () => {
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: 'My JAIIB Quiz Results',
        text: 'Check out my quiz results on the JAIIB Prep App!',
        url: window.location.href,
      })
      .then(() => {
        console.log('Shared successfully');
      })
      .catch((error) => {
        console.error('Error sharing:', error);
        toast({
          title: "Sharing failed",
          description: "Could not share results. Try again later.",
          variant: "destructive"
        });
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast({
            title: "Link copied!",
            description: "Results link copied to clipboard",
            variant: "default"
          });
        })
        .catch(() => {
          toast({
            title: "Copy failed",
            description: "Could not copy link. Try again later.",
            variant: "destructive"
          });
        });
    }
  };

  return (
    <div className="mt-8 flex justify-between">
      <Button 
        variant="outline" 
        onClick={onExit}
      >
        Exit
      </Button>
      
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
        
        <Button 
          onClick={onRetry}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default QuizResultActions;
