import { type RouteObject } from 'react-router';

import App from './App';

import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';

import {
  ProductCardShopGrid,
  ProductCardDetail,
} from '../features/products/components';

const routesArray: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
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
            path: ':productId',
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
