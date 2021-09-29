import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  )
}