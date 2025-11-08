import { type FC } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';

export const Router: FC = () => {
  return (
    <Routes>
      <Route element={<HomePage />}>
        <Route index element={<h1>OIIIII</h1>} />
      </Route>
    </Routes>
  );
};
