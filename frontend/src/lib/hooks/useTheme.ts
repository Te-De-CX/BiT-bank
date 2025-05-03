// src/hooks/useTheme.ts
import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

const useTheme = () => {
  // Initialize with system preference by default
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  // Get system color scheme preference
  const getSystemTheme = (): ResolvedTheme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  };

  // Resolve the actual theme to apply (handles 'system' option)
  const resolveTheme = useCallback((): ResolvedTheme => {
    return theme === 'system' ? getSystemTheme() : theme;
  }, [theme]);

  // Apply the theme to the document
  const applyTheme = useCallback((newTheme: ResolvedTheme) => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    setResolvedTheme(newTheme);
  }, []);

  // Handle system theme changes
  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme, applyTheme]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = savedTheme || 'system';
    
    setTheme(initialTheme);
    applyTheme(resolveTheme());
  }, [applyTheme, resolveTheme]);

  // Update theme preference
  const setAndStoreTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    const resolved = newTheme === 'system' ? getSystemTheme() : newTheme;
    applyTheme(resolved);
    localStorage.setItem('theme', newTheme);
  }, [applyTheme]);

  // Toggle between light/dark (skips system option)
  const toggleTheme = useCallback(() => {
    setAndStoreTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setAndStoreTheme]);

  return {
    theme,          // The user's selected preference ('light', 'dark', or 'system')
    resolvedTheme,  // The actual theme being applied (only 'light' or 'dark')
    setTheme: setAndStoreTheme,
    toggleTheme,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
  };
};

export default useTheme;