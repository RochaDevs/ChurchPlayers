'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";


interface IChosenThemeContext {
    chosenTheme: string | undefined;
    setChosenTheme: (theme: string | undefined) => void; // Corrigido o nome do método
}

interface IChildren {
    children: ReactNode;
}

const ChosenThemeContext = createContext<IChosenThemeContext | undefined>(undefined);

export const ChosenThemeProvider = ({ children }: IChildren) => {
    const [chosenTheme, setChosenTheme] = useState<string | undefined>('');

    const value = {
        chosenTheme,
        setChosenTheme
    };

    return (
        <ChosenThemeContext.Provider value={value}>
            {children}
        </ChosenThemeContext.Provider>
    );
}

export const useChosenTheme = () => {
    const context = useContext(ChosenThemeContext);
    if (context === undefined) {
        throw new Error("useChosenTheme must be used within a ChosenThemeProvider");
    }
    return context;
};
