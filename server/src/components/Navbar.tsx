import { type FC } from 'react';
import { Logo } from './Logo';

export const Navbar: FC = () => {
  return (
    <nav className='grid w-full grid-cols-3 justify-center items-center min-h-20 bg-primary '>
      <Logo />
      <span>Avatar</span>
      <span>ConfigButton</span>
    </nav>
  );
};
