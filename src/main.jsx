import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import the registration function from the base library
import { registerLicense } from '@syncfusion/ej2-base';

// 2. Register your specific key
registerLicense('Ngo9BigBOggjHTQxAR8/V1JHaF5cWWdCekx0Qnxbf1x2ZFJMYVlbR35PMyBoS35RcEVnW39ed3VQRWhdV012VEFe');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);