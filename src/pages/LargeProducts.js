import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
//import { collection, getDocs } from  "../config/firebase-config";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

function LargeProducts() {
  const [products, setProducts] = useState([]); 
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Reference the "products" collection in Firestore
        const productsRef = collection(db, "products");

        // Create a query to filter products where Size is "Large"
        const q = query(productsRef, where("size", "==", "L"));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Transform Firestore documents into an array of product objects
        const filteredProducts = querySnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data(),
        }));

        // Update state with filtered products
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products (size: L)</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.size} - €{product.price}
            </li>
          ))
        ) : (
          <p>No products found with size "Large".</p>
        )}
      </ul>
    </div>
  );
}

export default LargeProducts;
