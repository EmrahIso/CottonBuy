import { type Product } from './Product';

export type ProductsContextType = {
  products: Product[];
  loading: boolean | null;
  error: string | null;
};
