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
