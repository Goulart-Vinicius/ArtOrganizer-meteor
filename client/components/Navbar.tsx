import React from 'react';
import { Logo } from './Logo';
import { ConfigButton } from './ConfigButton';

export const Navbar = () => {

  return (
    <nav className='navbar navbar-expand-lg color-nav'>
      <div className='container-fluid'>
        <Logo />

        <div className='ml-2 col-md-2  menu-icons'>
    
          <ConfigButton />
        </div>
      </div>
    </nav>
  );
};
