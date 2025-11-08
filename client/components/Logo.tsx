import React from 'react';

export const Logo = () => {
  const logo = '/';
  return (
      <button className='navbar-brand'>
        <img
          alt='Logo'
          height='70rem'
          src={logo}
          width='180rem'
        />
      </button>
  );
};
