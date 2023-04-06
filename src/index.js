import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
// import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
);


