
import { useState } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <AuthLayout 
      title={isSignIn ? "Welcome Back" : "Create Account"} 
      subtitle={isSignIn ? "Sign in to access your account" : "Sign up to get started"}
    >
      {isSignIn ? (
        <SignInForm onToggleForm={toggleForm} />
      ) : (
        <SignUpForm onToggleForm={toggleForm} />
      )}
    </AuthLayout>
  );
};

export default Auth;
