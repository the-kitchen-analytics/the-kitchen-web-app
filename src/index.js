import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const googleSheetsOptions = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  sheetsOptions: [{ id: process.env.REACT_APP_GOOGLE_SHEETS_LIST_ID }]
};

root.render(
  <React.StrictMode>
    <App
      googleSheetsOptions={googleSheetsOptions}
    />
  </React.StrictMode>
);