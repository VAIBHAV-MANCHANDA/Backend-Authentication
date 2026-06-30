import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  // React ka code JS me hota hai, lekin browser ko HTML chahiye. createRoot bolta hai: “React app ko is HTML element ke andar chalao.”
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
