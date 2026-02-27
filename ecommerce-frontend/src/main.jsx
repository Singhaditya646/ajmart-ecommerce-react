import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import App from './App.jsx'

// Optional: make the centralized API available globally
import api from './api';
window.api = api; // now you can do window.api.get('/api/...') in console if needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
