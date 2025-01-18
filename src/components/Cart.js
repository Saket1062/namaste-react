import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import NestedItemList from "./NestedItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  console.log("cartitem", data);
  const infoArray = data.map(item => item.card.info);
  // will use for cart info 
  console.log("infoarray",infoArray);
  
  const dispatch = useDispatch();
  const handelClearCart = () =>{
    dispatch(clearCart());
  }
  return (
    <div className="text-center">
     <h1 className=" m-4 p-4 text-2xl font-bold">Cart</h1>
     <button className="bg-red-500 text-white py-2 px-4 m-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
     onClick={handelClearCart}
     >
  Clear Cart
</button>

    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      {data.map((item,index) => {
        return item.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish" 
          ? <ItemList key={index} items={[item]} /> 
          : <NestedItemList key={index} items={[item]} />;
      })}
    </div>
    </div>
  );
};

export default Cart;
