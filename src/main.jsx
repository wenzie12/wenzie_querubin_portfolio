import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx'
import './index.css'

import MetatagDecorator from './components/custom-metatags/MetatagDecorator'

//context
import { CursorProvider, LoadingProvider } from './context/HOCContext'
import { GlobalStateProvider } from './context/GlobalStateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStateProvider>  
        <LoadingProvider>
          <CursorProvider>
            <MetatagDecorator
              description="Frontend Software Engineer specializing in ReactJS"
              imageUrl="https://res.cloudinary.com/wenzie12sg/image/upload/v1689567401/wenziequerubin-portfolio-assets/img-link-banner_nqy6kz.png"
              siteName="wenziequerubin"
              siteUrl="https://res.cloudinary.com/wenzie12sg/image/upload/v1689567401/wenziequerubin-portfolio-assets/img-link-banner_nqy6kz.png"

              themeColor="#101B29"
              twitterCard=""
              twitterImageAlt=""
            />
            <App />
          </CursorProvider>
        </LoadingProvider>     
      </GlobalStateProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
