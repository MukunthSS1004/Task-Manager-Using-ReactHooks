import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>{dark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>;
};

export default ThemeToggle;
