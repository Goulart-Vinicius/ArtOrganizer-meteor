import { type FC } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';

export const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
