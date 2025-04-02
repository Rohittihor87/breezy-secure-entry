
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import SocialAuth from './SocialAuth';

interface SignUpFormProps {
  onToggleForm: () => void;
}

const SignUpForm = ({ onToggleForm }: SignUpFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirmPassword?: string }>({});
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; password?: string; confirmPassword?: string } = {};
    
    if (!name) {
      newErrors.name = 'Name is required';
    }
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      console.log('Sign up with:', { name, email, password });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Account created!",
        description: "You have successfully signed up.",
      });
      
      // Redirect to dashboard after successful registration
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: "There was an error creating your account.",
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
            <User size={18} />
          </div>
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
        </div>
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>

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
      
      <div className="space-y-2">
        <div className="relative">
          <div className="absolute left-3 top-3 text-muted-foreground">
            <Lock size={18} />
          </div>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
          <div 
            className="absolute right-3 top-3 cursor-pointer text-muted-foreground" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-auth hover:bg-auth-dark" 
        disabled={isLoading}
      >
        {isLoading ? "Signing up..." : "Sign Up"}
      </Button>
      
      <SocialAuth isLoading={isLoading} setIsLoading={setIsLoading} />
      
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Button 
            variant="link" 
            onClick={onToggleForm} 
            className="p-0 text-auth"
            disabled={isLoading}
          >
            Sign In
          </Button>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
