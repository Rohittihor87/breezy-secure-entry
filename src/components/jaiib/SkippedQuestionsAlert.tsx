
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "@/components/ui/alert-dialog";

type SkippedQuestionsAlertProps = {
  open: boolean;
  skippedCount: number;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const SkippedQuestionsAlert: React.FC<SkippedQuestionsAlertProps> = ({
  open,
  skippedCount,
  onOpenChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
            Skipped Questions
          </AlertDialogTitle>
          <AlertDialogDescription>
            You have skipped {skippedCount} question{skippedCount !== 1 ? 's' : ''}. 
            Would you like to continue and submit the quiz?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>
            Go Back to Quiz
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            Submit Quiz
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SkippedQuestionsAlert;
