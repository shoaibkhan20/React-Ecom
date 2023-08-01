import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

  const reducer = (state,action) => {

    const {id,title,price,image,quantity=1} = action.payload;

    if(action.type === "ADD_TO_CART"){
      console.log(id,title,price,image,quantity);
      return {state,cart:[]}
    }
  };
  const initialState = {
    cart:[],
    totalItemsCount :0,
    subTotalPrice:null,
    taxesAndFees: null,
    grandTotalPrice:null
  }
  const [state,dispatch] = useReducer(reducer,initialState);
  
  const AddtoCart = (details) => {
    dispatch({type:"ADD_TO_CART" ,payload:details});
  };

  const contextValues = {
    context: "cartContext",
    AddtoCart,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export function UseCartContext() {
  return useContext(CartContext);
}
