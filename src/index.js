import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = 'pk_test_Y2FwYWJsZS1kb2ctNC5jbGVyay5hY2NvdW50cy5kZXYk';


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.render(
    // <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ClerkProvider>,
  document.getElementById('root')
);
