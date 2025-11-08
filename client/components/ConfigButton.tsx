import React from 'react';
import { Link } from 'react-router';

export const ConfigButton = () => {
  const configSvg = 'img/navbar_home/config.svg';
  return (
    <Link to='/configuracao'>
      <img
        alt='Configurações'
        className='m-1'
        height='30rem'
        src={configSvg}
      />
    </Link>
  );
};
