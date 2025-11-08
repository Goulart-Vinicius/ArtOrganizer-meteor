import { type FC } from 'react';
import logo from '../assets/logo/logo_dark.png'


interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return <div className='flex items-center justify-start p-4' >
    <img src={logo} className='w-64 h-auto' />
  </div>;
};
