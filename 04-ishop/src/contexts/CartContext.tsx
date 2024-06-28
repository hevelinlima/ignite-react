import { ReactNode, createContext, useState } from "react";

export interface IProduct{
  id: string;
  name: string;
  imageURL: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextType{
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps{
  children: ReactNode;
}

export function CartProvider({children}: CartProviderProps){
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function removeFromCart(productId: string){
    setCartItems((state) => state.filter(item => item.id !== productId))
  }

  return(
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }} >
      { children }
    </CartContext.Provider>
  )
}