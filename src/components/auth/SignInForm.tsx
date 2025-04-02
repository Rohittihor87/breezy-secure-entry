
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import SocialAuth from './SocialAuth';

interface SignInFormProps {
  onToggleForm: () => void;
}

const SignInForm = ({ onToggleForm }: SignInFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // This is where you would integrate with your auth provider
      console.log('Sign in with:', { email, password, rememberMe });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You have signed in successfully.",
      });
      
      // Redirect to options page after successful login
      navigate('/options');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <div className="absolute left-3 top-3 text-muted-foreground">
            <Mail size={18} />
          </div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <div className="relative">
          <div className="absolute left-3 top-3 text-muted-foreground">
            <Lock size={18} />
          </div>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
          <div 
            className="absolute right-3 top-3 cursor-pointer text-muted-foreground" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>
        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember-me" 
            checked={rememberMe} 
            onCheckedChange={(checked) => setRememberMe(checked === true)}
          />
          <Label htmlFor="remember-me" className="text-sm">Remember me</Label>
        </div>
        <Button variant="link" size="sm" className="text-auth-dark px-0">
          Forgot password?
        </Button>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-auth hover:bg-auth-dark" 
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
      
      <SocialAuth isLoading={isLoading} setIsLoading={setIsLoading} />

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Button 
            variant="link" 
            onClick={onToggleForm} 
            className="p-0 text-auth"
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
