const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const TEST_SERVER = 'http://28.244.56.144/test';

app.use(cors());

app.get('/categories/:categoryname/products', async (req, res) => {
  const { categoryname } = req.params;
  const { n, minPrice, maxPrice, sort, order, page = 1 } = req.query;

  try {
    const response = await axios.get(`${TEST_SERVER}/companies/AMZ/categories/${categoryname}/products/top-${n}?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    let products = response.data;

    // Implement sorting logic
    if (sort) {
      products.sort((a, b) => {
        if (order === 'desc') {
          return b[sort] - a[sort];
        } else {
          return a[sort] - b[sort];
        }
      });
    }

    // Implement pagination logic
    const pageSize = parseInt(n, 10);
    const paginatedProducts = products.slice((page - 1) * pageSize, page * pageSize);

    res.json(paginatedProducts);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

app.get('/categories/:categoryname/products/:productid', async (req, res) => {
  const { categoryname, productid } = req.params;

  try {
    const response = await axios.get(`${TEST_SERVER}/companies/AMZ/categories/${categoryname}/products/${productid}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching product details');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
