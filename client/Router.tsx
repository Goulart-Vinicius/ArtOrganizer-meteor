import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
