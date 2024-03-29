import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import NiceModal from '@ebay/nice-modal-react';

//context
import { CursorProvider, LoadingProvider } from './context/HOCContext'
import { GlobalStateProvider } from './context/GlobalStateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>  
      <LoadingProvider>
        <CursorProvider>
          <NiceModal.Provider>
            <App />
          </NiceModal.Provider>
        </CursorProvider>
      </LoadingProvider>     
    </GlobalStateProvider>
    
  </React.StrictMode>,
)
