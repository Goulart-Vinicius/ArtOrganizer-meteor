import { type FC } from 'react';
import logoLight from '../assets/logo/logo.png';
import logoDark from '../assets/logo/logo_dark.png';
import { useTheme } from '../hooks/useTheme';

interface LogoProps {
  theme?: 'light' | 'dark';
}

export const Logo: FC<LogoProps> = ({ theme: propTheme }) => {
  const defaultTheme = useTheme();
  const theme = propTheme ?? defaultTheme;

  return (
    <div className='flex items-center justify-start p-4'>
      <img
        src={theme === 'light' ? logoLight : logoDark}
        className='w-64 h-auto'
      />
    </div>
  );
};
