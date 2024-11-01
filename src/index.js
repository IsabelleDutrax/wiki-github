import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

// import GlobalStyles from './styles';
import './global.css'; // Importa o estilo global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GlobalStyles /> */}
    <App />
  </React.StrictMode>
);

