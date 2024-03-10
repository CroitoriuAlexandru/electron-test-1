

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import '../../../build/tailwind.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
