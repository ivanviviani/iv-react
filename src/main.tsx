import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './main.scss';

const mainContainer = document.getElementById('root') as HTMLElement;
const root = createRoot(mainContainer);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
