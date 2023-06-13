import { createContext, useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../../../Products';
import { CreateProduct } from './CreateProduct';



export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
	const { product } = useContext(CreateProduct);

	const getDefaultCart = () => {
		
		let cart = {};
		for (let i = 1; i < product.length + 1; i++) {
			cart[i] = 0;
		}
		console.log(cart)
		return cart;
	};



	const [cartItems, setCartItems] = useState(getDefaultCart());
	console.log(cartItems)

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = product.find((product) => product.id === Number(item));
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const checkout = () => {
		setCartItems(getDefaultCart());
	};

	const contextValue = {
		cartItems,
		addToCart,
		updateCartItemCount,
		removeFromCart,
		getTotalCartAmount,
		checkout,
	};

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
