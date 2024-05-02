'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'

interface IThemeChanger {
  iconeLightMode: React.ReactNode
  iconeDarkMode: React.ReactNode
}

export const ThemeChanger = ({ iconeLightMode, iconeDarkMode }: IThemeChanger) => {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  // Quando o componente monta, atualiza o estado para true
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;  // Exibe um carregamento ou nada até o componente estar montado
  }

  return (
    <div>
      {/* The current theme is: {theme} */}
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          {iconeLightMode}
        </button>

      ) : (
        <button onClick={() => setTheme('dark')}>
          {iconeDarkMode}
        </button>
      )}
    </div>
  )
}