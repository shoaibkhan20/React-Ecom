import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {


  const reducer = (state, action) => {
    // cart reducer function
    if (action.type === "ADD_TO_CART") {
      const { id, title, price, image } = action.payload;
      var SearchProduct = state.cart.find((item) => item.id == id);
      if (SearchProduct) {
        // to update existing cart product
        var updateElementsList = state.cart.map((curElem) => {
          if (curElem.id == id) {
            if(SearchProduct.quantity<5){
              let updatedQuantity = curElem.quantity + 1;
              let totalPrice = Math.round(curElem.total + price);
              return {
                ...curElem,
                quantity: updatedQuantity,
                total: totalPrice,
              };
            } else{
              return curElem;
            }
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updateElementsList,
        };
      } else {
        let CartProduct = {
          id,
          name: title,
          price,
          total: price,
          image,
          quantity: 1,
        };
        return {
          ...state,
          cart: [...state.cart, CartProduct],
        };
      }
    }

    if (action.type == "CALCULATE_TOTALS") {
      let TaxesOrFees = 10;
      let itemsCount = 0;
      let subtotal = 0;
      state.cart.map((cartElem) => {
        subtotal += cartElem.total;
        itemsCount += cartElem.quantity;
        // console.log(subtotal,itemsCount,cartElem.total)
      });
      subtotal = Math.round(subtotal)
      let Grandtotal = subtotal + TaxesOrFees;
      return {
        ...state,
        totalItemsCount: itemsCount,
        subTotalPrice: subtotal,
        taxesAndFees: TaxesOrFees,
        grandTotalPrice: Grandtotal,
      };
    }

    if (action.type === "REMOVE_FROM_CART") {
      // console.log("item will be removed soon....")
      const { cart, totalItemsCount, subTotalPrice, grandTotalPrice } = state;
      let deletedItem = cart.find((item) => item.id === action.id);
      let NewCart = cart.filter((item) => {
        return item.id != action.id;
      });
      return {
        ...state,
        cart: NewCart,
        totalItemsCount: totalItemsCount - deletedItem.quantity,
        subTotalPrice: subTotalPrice - deletedItem.total,
        grandTotalPrice: grandTotalPrice - deletedItem.total,
      };
    }

    if(action.type === "INCREMENT"){
      updateElementsList = state.cart.map((curElem) => {
        if (curElem.id == action.id) {
          let totalPrice,updatedQuantity;
          if(curElem.quantity < 5){
            updatedQuantity = curElem.quantity + 1;
            totalPrice = Math.round(curElem.total + curElem.price);
            return {
              ...curElem,
              quantity: updatedQuantity,
              total: totalPrice,
            };
          }else{
            return curElem;
          }
        }else {
          return curElem;
        }
      });
      return {
        ...state,
        cart:updateElementsList
      };
    }

    else if(action.type === "DECREMENT"){
      // console.log("quantity will decrements soon")
      updateElementsList = state.cart.map((curElem) => {
        if (curElem.id == action.id) {
          if(curElem.quantity > 1){
            let updatedQuantity = curElem.quantity - 1;
            let totalPrice = Math.round(curElem.total - curElem.price);
            return {
              ...curElem,
              quantity: updatedQuantity,
              total: totalPrice,
            };
          } else{
            return curElem;
          }
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart:updateElementsList
      };
    }
  };
  const initialState = {
    // initial states for reducer
    cart: [],
    totalItemsCount: 0,
    subTotalPrice: null,
    taxesAndFees: null,
    grandTotalPrice: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState); // reducer definition
  const AddtoCart = (details) => {
    dispatch({ type: "ADD_TO_CART", payload: details });
    dispatch({ type: "CALCULATE_TOTALS" });
  };
  const RemovefromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const CartProductQuantity = (action,id) => {
    dispatch({type:action,id});
    dispatch({ type: "CALCULATE_TOTALS" });
  }

  const contextValues = {
    state,
    cart: state.cart,
    AddtoCart,
    RemovefromCart,
    CartProductQuantity
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
