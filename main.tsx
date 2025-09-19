import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Correct path to App.tsx in the same directory

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}