import { type CategoryType } from './CategoryType';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
