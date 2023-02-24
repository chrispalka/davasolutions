import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles.css';
import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
