import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { HelmetProvider } from "react-helmet-async";
import './i18n'
import './index.css'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </HelmetProvider>
    </BrowserRouter >
  </React.StrictMode>,
);
