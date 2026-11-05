import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Standalone preview entry point only — uses HashRouter instead of
// BrowserRouter because BrowserRouter needs a real origin (http/https) to
// work, which a file:// page opened by double-clicking does not have.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
