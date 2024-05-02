// 'use client';
// import React, { useEffect, useState } from 'react';

// interface IThemeSwitcher {
//   iconeLightMode: React.ReactNode
//   iconeDarkMode: React.ReactNode
// }

// const ThemeSwitcher = ({iconeLightMode, iconeDarkMode}: IThemeSwitcher) => {
//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem('theme') === 'dark';
//     setDarkMode(isDarkMode);
//     document.documentElement.className = isDarkMode ? 'dark' : '';
//   }, []);

//   const toggleTheme = () => {
//     const isDark = !darkMode;
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     document.documentElement.className = isDark ? 'dark' : '';
//     setDarkMode(isDark);
//   };

//   return (
//     <button onClick={toggleTheme}>
//       {darkMode ?  iconeLightMode : iconeDarkMode }
//     </button>
//   );
// };

// export default ThemeSwitcher;
