import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';
import App from './App';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter >
  </React.StrictMode>,
);
