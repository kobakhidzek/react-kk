import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './components/auth/Auth.jsx'
import Reg from './components/registration/Reg.jsx'


createRoot(document.getElementById('root')).render(

 <div>
  <Auth />
  <Reg />
 </div>
)
