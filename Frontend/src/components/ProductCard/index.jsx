import { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import Products from './Products';
import './Styles.scss';
import { CreateProduct } from '../../Pages/Public/context/CreateProduct';

const ProductCard = () => {
	const {product} = useContext(CreateProduct)
	// const products = PRODUCTS;

	return (
		<div className='prouctcontainer'>
			{product.map((product) => (
				<Products data={product} />
			))}
		</div>
	);
};

export default ProductCard;
