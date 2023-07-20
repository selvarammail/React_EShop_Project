import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';


const ProductsPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState("default");

 useEffect(() => {
  //  Fetch products based on category and sorting option
  //  Use API endpoint: /products and /products/categories mentioned in the project statement
 }, [categoryId, sortingOption]);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(`/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
  fetchProducts();
}, []);


  const handleSortingOptionChange = (event, newOption) => {
    setSortingOption(newOption);
  };

  return (
    <div>
      <ToggleButtonGroup value={sortingOption} exclusive onChange={handleSortingOptionChange}>
        <ToggleButton value="default">Default</ToggleButton>
        <ToggleButton value="priceHighToLow">Price High to Low</ToggleButton>
        <ToggleButton value="priceLowToHigh">Price Low to High</ToggleButton>
        <ToggleButton value="newest">Newest</ToggleButton>
      </ToggleButtonGroup>

      {/* {products.map((product) => ( 
       <Card key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
             </Card>
      ))} */}

    </div>
  );
};

export default ProductsPage;
