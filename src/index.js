import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { FronteggProvider } from '@frontegg/react';
const contextOptions = {
  baseUrl: 'https://app-afqlz9e8vuwk.frontegg.com',
  clientId: 'f437618c-431d-4af5-8941-606cca7c160d',
  appId: '10301de5-f748-47b3-a51d-0f21a6851b7b'
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <FronteggProvider contextOptions={contextOptions}>
    <App />
    </FronteggProvider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
