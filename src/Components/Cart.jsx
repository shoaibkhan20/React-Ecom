import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UseCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';

export default function Cart() {
  
  const { state, cart, RemovefromCart,CartProductQuantity } = UseCartContext();
  function DeleteItem(id){
    RemovefromCart(id);
  }
  return (
    <>
      <div className="w-full py-10 px-5 md:px-20">
        <h1 className="font-bold text-[14px] uppercase family-poppins mb-10 underline">
          home / Shopping Cart
        </h1>
        {cart[0] ? (
          <>
            <div className="relative overflow-x-auto shadow-sm">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-6">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((CartProduct) => {
                    return (
                      <tr
                        key={CartProduct.name}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-32 p-4 h-[30px]">
                          <img
                            src={CartProduct.image}
                            alt={CartProduct.name}
                            className="object-contain w-[40px]"
                          />
                        </td>
                        <td className="truncate md:whitespace-normal  px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          <Link to={`/product/${CartProduct.id}/?name=${CartProduct.name}`}>
                            {CartProduct.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                              <IconButton 
                                onClick={()=>CartProductQuantity("INCREMENT",CartProduct.id)}
                              >+</IconButton>
                              <input
                                type="text"
                                id="first_product"
                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                disabled
                                value={CartProduct.quantity}
                              />
                              <IconButton 
                                onClick={()=>CartProductQuantity("DECREMENT",CartProduct.id)}
                              >-</IconButton>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          ${CartProduct.price}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          ${CartProduct.total}
                        </td>
                        <td className="px-6 py-4">
                          <AlertDialog deleteFunction={DeleteItem} productDetails={CartProduct.id}>
                            <button
                              className="font-medium text-red-600 dark:text-red-500 hover:underline"
                            >
                              Remove
                            </button>
                          </AlertDialog>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* End of your products table */}
            </div>
            <div className="mt-20">
              <h1 className="font-bold text-[20px] uppercase mt-8">
                Cart Totals
              </h1>
              <table className="w-[300px] cartTotals-table">
                <tbody>
                  <tr className="border-b pb-10">
                    <td>Subtotal</td>
                    <td className="text-right">${state.subTotalPrice}</td>
                  </tr>
                  <tr className="border-b pb-10">
                    <td>Shipping Fee</td>
                    <td className="text-right">${state.taxesAndFees}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td className="text-right">${state.grandTotalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <button className="border-none bg-yellow-700 py-3 px-8 rounded-sm text-white text-sm mt-10">
                Procceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-center my-10"> Cart is empty </h2>
            <button className="py-2 px-6 rounded-sm bg-yellow-700 text-white"
              onClick={()=>window.history.back()}
            >Continue shopping</button>
          </div>
        )}
      </div>
    </>
  );
}





export function AlertDialog({children,deleteFunction,productDetails}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Removing Product?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to remove item form cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={()=>{handleClose;deleteFunction(productDetails)}} >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
