import { createContext, useContext, useEffect, useReducer } from "react";
import { json } from "react-router-dom";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartData = JSON.parse(localStorage.getItem("cartData")) || [];
// console.log("getCartData", getCartData)

const initialState = {
  // cart:[],
  cart: getCartData,
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increament decreament inside the cart

  const setIncrease  = (id) => {
    dispatch({ type: "SET_INCREAMENT", payload: id });
  };

  const setDecrease  = (id) => {
    dispatch({ type: "SET_DECREAMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //to add the data in localStorage for cart item
  useEffect(() => {
    // dispatch({type: "CART_TOTAL_ITEM"})
    // dispatch({type:"CART_TOTAL_PRICE"})
    dispatch({type:"CART_ITEM_PRICE_TOTAL"})
    localStorage.setItem("cartData", JSON.stringify(state.cart));
  }, [state.cart]);

  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value=
      {{ ...state,
       addToCart,
        removeItem,
         clearCart,
         setIncrease,
         setDecrease
          }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
