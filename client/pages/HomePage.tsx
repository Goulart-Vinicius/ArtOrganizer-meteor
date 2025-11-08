import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
