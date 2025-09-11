import { type RouteObject } from 'react-router';

import App from './App';

import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CartPage from '../pages/CartPage';

import {
  ProductCardShopGrid,
  ProductCardDetail,
} from '../features/products/components';

const routesArray: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
        children: [
          {
            index: true,
            element: <ProductCardShopGrid />,
          },
          {
            path: 'card-details',
            element: <ProductCardDetail />,
          },
        ],
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
];

export default routesArray;
