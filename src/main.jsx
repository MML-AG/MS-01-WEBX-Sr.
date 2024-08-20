import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Auth0Provider
    domain="dev-xrqs827anl6fyznn.us.auth0.com"
    clientId="RF8GGN1NwNALc16ya671fhLy6cIfjkEU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
      <App />
  </Auth0Provider>
    </BrowserRouter>,
)
