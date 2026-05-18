import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'
import App from './App.jsx'
import { ToastProvider } from './components/Toast.jsx'

// Set global axios base URL — uses VITE_API_URL in production, localhost in dev
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>,
)
