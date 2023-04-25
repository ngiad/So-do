import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ProviderRedux from './Redux/ProviderRedux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderRedux>
        <App />
      </ProviderRedux>
    </BrowserRouter>
  </React.StrictMode>
);

