import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'es' | 'fr' | 'de' | 'zh';

interface SettingsContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    language: string;
    setLanguage: (lang: string) => void;
    fontSize: number;
    setFontSize: (size: number) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
    // Initialize state from localStorage or defaults
    const [theme, setThemeState] = useState<Theme>(() => {
        const saved = localStorage.getItem('pnpl_theme');
        return (saved as Theme) || 'light';
    });

    const [language, setLanguageState] = useState<string>(() => {
        return localStorage.getItem('pnpl_language') || 'en';
    });

    const [fontSize, setFontSizeState] = useState<number>(() => {
        const saved = localStorage.getItem('pnpl_fontSize');
        return saved ? parseInt(saved) : 16;
    });

    // Wrapper functions to update state AND localStorage
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('pnpl_theme', newTheme);
    };

    const setLanguage = (newLang: string) => {
        setLanguageState(newLang);
        localStorage.setItem('pnpl_language', newLang);
    };

    const setFontSize = (newSize: number) => {
        setFontSizeState(newSize);
        localStorage.setItem('pnpl_fontSize', newSize.toString());
    };

    // Apply side effects (DOM updates)
    useEffect(() => {
        // Theme
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);

        // Font Size
        document.documentElement.style.fontSize = `${fontSize}px`;

        // Language (optional: could set lang attribute)
        document.documentElement.lang = language;

    }, [theme, fontSize, language]);

    return (
        <SettingsContext.Provider value={{ theme, setTheme, language, setLanguage, fontSize, setFontSize }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
