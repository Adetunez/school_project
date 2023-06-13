import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const CartItem = ({data}) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={data.image} />
      <div className="description">
        <p>
          <b>{data.title}</b>
        </p>
        <p> Price: NGN {data.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(data.id)}> - </button>
          <input
            value={cartItems[data.id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)}
          />
          <button onClick={() => addToCart(data.id)}> + </button>
        </div>
      </div>
    </div>
  );
};
