import React, { useState } from "react";
import { useCart } from "./CartContext";

const dishes = [
  { id: 1, name: "Iphone 16", price: 1099.0, description: "256Gb", image: "https://cdn.viettelstore.vn/Images/Product/ProductImage/872124681.jpeg" },
  { id: 2, name: "Iphone 14 Pro", price: 899.00, description: "128Gb", image: "https://iplanet.one/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1691142210&width=1920" },
  { id: 3, name: "Iphone 16 Pro", price: 1599.00, description: "128Gb", image: "https://static.iphoned.nl/orca/products/23030/apple-iphone-16-pro-max.png" },
  { id: 4, name: "Iphone 16 Pro Max", price: 1999.00, description: "512Gb", image: "https://tse1.mm.bing.net/th?id=OIP.yiLRuiP5dPPWf6XJbXR3egHaHX&pid=Api&P=0&h=220" }
];

const DishesList = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dishes-container">
      <input
        type="text"
        placeholder=" Search ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="dishes-list">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Price: ${dish.price.toFixed(2)}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesList;