import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId
    // Use API endpoint: /products/{id} mentioned in the project statement
  }, [productId]);

  const handleBuyNow = () => {
    // Implement buy now functionality
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          {/* Add more details and styling as needed */}
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
