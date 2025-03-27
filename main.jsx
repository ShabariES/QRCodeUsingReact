import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QRcode } from './QRcode'; // Assuming QRcode is a named export
import './QRcode.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QRcode />
  </StrictMode>
);