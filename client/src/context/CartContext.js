import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => setCart([...cart, item]);
    const removeFromCart = (item) => setCart(cart.filter((i) => i.name !== item.name));
    return (_jsx(CartContext.Provider, { value: { cart, addToCart, removeFromCart }, children: children }));
};
export default CartContext;
