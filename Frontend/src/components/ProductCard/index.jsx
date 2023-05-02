import React from "react";
import "./Styles.scss";

const ProductCard = ({ products }) => (
  <div className="prouctcontainer">
    {products.map((product, index) => (
      <div key={index} className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">NGN{product.price}</p>
      </div>
    ))}
  </div>
);

ProductCard.defaultProps = {
  products: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xYZs817kQ_4nUIcDRZoHUq0nYM35VgByKg&usqp=CAUac",
      description: "Lem ipsum dolor amet sit",
      title: "Fat yam",
      price: "200",
    },
  ],
};
export default ProductCard;
