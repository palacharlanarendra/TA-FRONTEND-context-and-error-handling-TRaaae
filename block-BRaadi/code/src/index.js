import React from 'react';
import ReactDOM from 'react-dom';
import './style/app.css';
import App from './components/App';
import ErrorBoundary2 from './components/ErrorBoundary2';
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary2>
      <App />
    </ErrorBoundary2>
  </React.StrictMode>,
  document.getElementById('root')
);
