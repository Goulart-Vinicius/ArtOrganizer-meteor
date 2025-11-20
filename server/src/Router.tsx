import { type FC } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { WelcomePage } from './pages/WelcomePage';

export const Router: FC = () => {
  return (
    <Routes>
      <Route index element={<WelcomePage/>}/>
      <Route path='/home' element={<HomePage />}>
        <Route index element={<h1></h1>} />
      </Route>
    </Routes>
  );
};
