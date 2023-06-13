import React, { useContext } from 'react';
import { ShopContext } from '../../Pages/Public/context/ShopContext';
import './Styles.scss';

const Products = ({data}) => {


	const { addToCart, cartItems } = useContext(ShopContext);
	const cartItemCount = cartItems[data.id];

	console.log(typeof(cartItemCount))
	console.log(data.id)

	return (
		<div  >
				<div key={data.index} className='product-card'>
					<img src={data.image} alt={data.title} />
					<h3>{data.title}</h3>
					<p className='description'>{data.description}</p>
					<p className='price'>NGN{data.price}</p>
					<button className='submit' onClick={() => addToCart(data.id,)}>
						Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
					</button>
				</div>
		</div>
	);
};

export default Products
