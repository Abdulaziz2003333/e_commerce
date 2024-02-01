import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from "./context/Context.jsx";
import './index.css'
import './i18n';
import BrowserProvider from "./provider/BrowserProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
      <BrowserProvider>
          <App />
      </BrowserProvider>
   </ContextProvider>
  </React.StrictMode>,
)
