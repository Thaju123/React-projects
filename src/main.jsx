import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Choose one of these to render
import { App } from './App.jsx';
// import { Practices } from './Practices.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
  </StrictMode>
);
