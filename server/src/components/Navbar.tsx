import { type FC } from 'react';
import { Logo } from './Logo';
import { Avatar } from './Avatar/Avatar';

export const Navbar: FC = () => {
  return (
    <nav className='flex w-full justify-between items-center min-h-20 bg-background-dark text-text-secondary '>
      <Logo />
      <Avatar />
    </nav>
  );
};
