import React, { useState, useEffect } from 'react';
import { ThemeContext, Theme, themes } from '@/lib/themes';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
      console.log('Theme initialized from localStorage:', savedTheme);
    } else {
      // If no saved theme, default to light
      localStorage.setItem('theme', 'light');
      console.log('No saved theme found, defaulting to light');
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    
    // Apply theme to document
    console.log('Applying theme:', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, isInitialized]);

  const updateTheme = (newTheme: Theme) => {
    console.log('Updating theme to:', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 