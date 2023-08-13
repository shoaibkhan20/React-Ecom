import { useParams, useSearchParams } from "react-router-dom";
import { data } from "../data";
import { useEffect, useState } from "react";
import { UseCartContext } from "../Context/CartContext";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export function Snackbars({children , messege}) {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack>
      <Button onClick={handleClick}>
        {children}
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {messege}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default function ProductDetails() {

  const { AddtoCart } = UseCartContext();//context function for add to cart
  const [discriptionTab, setDiscriptionTab] = useState(true); // triggering discription tab
  const [searchParams] = useSearchParams();
  const { id } = useParams(); // getting product meta from url
  const productName = searchParams.get("name"); // getting product name from url
  
  // filtering product details from data
  let [productDetails] = data.filter((item) => {
    return item.id == id || item.title == productName;
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const round = (val) => {
    // for round of a number
    return Math.round(val);
  };

  return (
    <>
      <div className="w-full flex flex-wrap gap-10 justify-center items-center h-full py-10 md:pl-10 overflow-hidden">
        <div className="w-[90%] md:w-[300px] h-[350px] grid place-items-center border shadow-md p-10">
          <img
            src={productDetails.image}
            alt={productDetails.image}
            className="object-contain w-[auto] h-[270px]"
          />
        </div>
        <div className="h-full w-full md:w-[600px] flex flex-col gap-4 justify-start items-start p-5 sm:py-10">
          <h1 className="font-[600] capitalize text-lg md:text-2xl overflow-y-auto mb-5">
            {productDetails.title}
          </h1>
          <h3 className="text-[13px]">
            Ratings : {productDetails.rating.rate}
        </h3>

          <p className="font-[500] text-md">
            <del className="text-gray-400">
              ${round(productDetails.price + (10 / 100) * productDetails.price)}
            </del>
            <span className="text-blue-500 ml-3">${productDetails.price}</span>
          </p>
          <p className="w-full truncate text-[12px] family-poppins">
            {productDetails.description}
          </p>
          
          <select
            name="size"
            id="size"
            className="mt-6 border-2 py-2 px-2 rounded outline-none"
          >
            <option value="na" selected hidden>
              Select Size
            </option>
            <option value="na">N/A</option>
          </select>
          <Snackbars messege={"Item Added To Cart Successfully"}>
            <button
              onClick={()=>{
                AddtoCart(
                  productDetails
                )
              }}
              className=" py-2 px-12 md:px-6 -ml-2 bg-yellow-700 text-white text-[12px] font-[300] hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </Snackbars>
          <p className="text-[11px] capitalize">
            <font className="font-bold">Category : </font>
            {productDetails.category}
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full pl-6 mb-10">
        <div className="w-full md:w-[75%] mx-auto">
          <div>
            <button
              className={`py-3 px-10 outline-none border text-sm family-poppins font-[600] ${
                discriptionTab ? "bg-gray-200" : ""
              }`}
              onClick={() => setDiscriptionTab(true)}
            >
              Discription
            </button>
            <button
              className={`py-3 px-10 outline-none border text-sm family-poppins font-[600] ${
                !discriptionTab ? "bg-gray-200" : ""
              }`}
              onClick={() => setDiscriptionTab(false)}
            >
              Reviews({productDetails.rating.count})
            </button>
          </div>
          <div className="w-full h-[200px] p-8">
            {discriptionTab ? (
              <div className="discription-tab">
                <p className="text-[12px]">{productDetails.description}</p>
              </div>
            ) : (
              <div className="reviews-tab">
                <p className="text-[12px]">Reviews not availible to show</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
