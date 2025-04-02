
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  tagline?: string;
}

const AuthLayout = ({ children, title, subtitle, tagline }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-auth-gradient p-4 animate-fade-in">
      <div className="w-full max-w-md">
        {tagline && (
          <div className="text-center mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-white bg-primary/80 py-2 px-4 rounded-md shadow-md inline-block">
              {tagline}
            </h1>
          </div>
        )}
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-auth-light">{subtitle}</p>
        </div>
        
        <Card className="border-none shadow-lg">
          <CardContent className="pt-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
