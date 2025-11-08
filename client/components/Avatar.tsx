import React from 'react';

export const Avatar = () => {
  const userImage = '/';
  const username = 'username';
  return (
    <div className='dropstart'>
      <a
        aria-expanded='false'
        className=''
        data-bs-toggle='dropdown'
        href='#'
        role='button'
      >
        <img
          className='m-1 mx-4 img-perfil'
          alt='perfil'
          height='50rem'
          src={userImage}
        />
      </a>

      <ul className='dropdown-menu'>
        <li>
          <span className='m-2'>{username}</span>
        </li>
        <li>
          <a className='dropdown-item' href='/logout'>
            Sair
          </a>
        </li>
      </ul>
    </div>
  );
};
