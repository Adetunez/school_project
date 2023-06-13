import { useState, createContext } from 'react';
import {PRODUCTS} from '../../../Products'

export const CreateProduct = createContext(null);

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(PRODUCTS)

    const newProduct =(product)=>{
        setProduct([...PRODUCTS, product])

    }


	return <CreateProduct.Provider value = {{product, newProduct}} >{children}</CreateProduct.Provider>;
};
