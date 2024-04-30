import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import stores from './stores'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={stores}>
        <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
