import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './components/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* COMPONENTS STRUCTURE

---- App (theme context, maybe fetch logic context inside custom hook (FakeStore API))
 |
 ---- Navigation Bar (Routing Links)
 |
 ---- Home page
 |
 ---- Shop page 
 | | 
 | ---- Card (types: shop-page || cart-page)
 |   | 
 |   ---- Amount Input (increment and decrement buttons for input)
 |   |
 |   ---- Add to Cart Button 
 | 
 ---- Cart page
 | |
 | ---- Card Card (types: shop-page || cart-page)
 |   |   | 
 |   |   ---- Amount Input (increment and decrement buttons for input)
 |   |   |
 |   |   ---- Save Quantity Button 
 |
 ---- 404 Error Page



Design Inspiration:



*/
