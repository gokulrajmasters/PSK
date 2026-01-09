import { createContext, useContext } from 'react';

export type Theme = 'dark' | 'light';

export const themes = {
  dark: {
    background: 'bg-black',
    text: 'text-white',
    textMuted: 'text-white/60',
    navbar: 'bg-black/10',
    card: 'bg-white/5',
    border: 'border-white/10',
    cardHover: 'hover:bg-white/10',
    input: 'bg-white/10 border-white/20',
    buttonHover: 'hover:bg-white/10',
  },
  light: {
    background: 'bg-white',
    text: 'text-black',
    textMuted: 'text-black/60',
    navbar: 'bg-white/30 backdrop-blur-md',
    card: 'bg-black/5',
    border: 'border-black/10',
    cardHover: 'hover:bg-black/10',
    input: 'bg-black/10 border-black/20',
    buttonHover: 'hover:bg-black/10',
  },
};

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  setTheme: () => null,
});

export const useTheme = () => useContext(ThemeContext); 