import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Добавь этот импорт
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Оберни App в BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)