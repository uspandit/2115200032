import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';

const ProductList = () => {
  const { categoryname } = useParams();
  const location = useLocation(); // Call useLocation here
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const query = new URLSearchParams(location.search);

    const fetchProducts = async () => {
      const n = query.get('n');
      const minPrice = query.get('minPrice');
      const maxPrice = query.get('maxPrice');
      const sort = query.get('sort');
      const order = query.get('order');
      const page = query.get('page');

      try {
        const response = await axios.get(`http://localhost:3000/categories/${categoryname}/products`, {
          params: { n, minPrice, maxPrice, sort, order, page }
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryname, location.search]); // Add location.search as a dependency

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products in {categoryname}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/categories/${categoryname}/products/${product.id}`}>
              {product.productName} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
