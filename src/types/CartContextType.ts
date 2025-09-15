export type CartContextType = {
  cartProducts: CartProduct[];
  addProductToCart: (productId: number, productQuantity: number) => void;
  removeProductFromCart: (productId: number) => void;
  clearCart: () => void;
};

export type CartProduct = {
  productId: number;
  productQuantity: number;
};
