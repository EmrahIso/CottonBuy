import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router';
import routesArray from './app/routes';

import { ProductsContextProvider } from './features/products/context/ProductsContext';
import { CartContextProvider } from './features/cart/context/CartContext';
import './main.css';

const router = createBrowserRouter(routesArray);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ProductsContextProvider>
  </StrictMode>
);

/* COMPONENTS STRUCTURE

---- App (theme context, maybe fetch logic context inside custom hook (FakeStore API))
 |
 ---- Navigation Bar (Routing Links)
 |
 ---- Home page
 | | 
 | ---- Hero
 | | | 
 | | ---- ShopNowButton
 | |  
 | ---- Featured Products   
 | | |
 | | ---- Carousel
 | | | |
 | | | ---- Card
 | | | |
 | | | ---- CarouselSwitchButton
 | | | 
 | | ---- ShopNowButton  
 | |
 | ---- Newsletter
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
 |
 ---- Footer 




Design Inspiration:



*/
