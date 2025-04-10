import React, { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Always use dark mode
  const isDarkMode = true;
  
  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 