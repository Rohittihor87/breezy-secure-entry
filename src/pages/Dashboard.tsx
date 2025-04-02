
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = () => {
    // Here you would implement actual sign out logic
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
        </div>
        
        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard!</h2>
          <p className="text-muted-foreground">
            This is a placeholder dashboard. More features will be added in future updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
