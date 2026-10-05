import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Utils/Redux/Store.js'
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
 
  <Provider store={Store}>
    <BrowserRouter>

    <App />
  
    </BrowserRouter>
  </Provider>

)
