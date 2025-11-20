import type { FC } from 'react';
import { Navbar } from '../components/Welcome/Navbar';

export const WelcomePage: FC = () => {
  return (
    <>
      <Navbar />
      <h1>Welcome page</h1>
    </>
  );
};
