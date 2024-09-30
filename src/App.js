import React from 'react';
import Home from './Home';
import './style.css'; 
import './script.js'; 
import Preloader from './preloader.jsx';
import TopBar from './TopBar.jsx';
import Aboutus from './pages/Aboutus.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ClerkProvider } from '@clerk/clerk-react'
import { Analytics } from "@vercel/analytics/react"

const PUBLISHABLE_KEY = 'pk_test_Y2FwYWJsZS1kb2ctNC5jbGVyay5hY2NvdW50cy5kZXYk'

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  console.log(import.meta.env);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className="App">
      {/* <Preloader />   */}

      <Home />
      <SpeedInsights />
      <Analytics />
    </div>
    </ClerkProvider>

  );
}

export default App;