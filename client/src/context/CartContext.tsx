import { createContext, useState, ReactNode } from 'react';

interface CartItem {
  name: string;
  price: number;
  type: 'member' | 'non-member';
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => setCart([...cart, item]);
  const removeFromCart = (item: CartItem) =>
    setCart(cart.filter((i) => i.name !== item.name));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
