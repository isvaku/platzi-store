import { useEffect, useState } from 'react';

const API = process.env.API;

const useInitialState = () => {
  try {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(async () => {
      const response = await fetch(API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setProducts(data.products);
      setCart(data.cart);
    }, []);

    return {
      products,
      cart,
    };
  } catch (error) {
    return {
      products: [],
      error: typeof error === 'object' ? error.message : error,
    };
  }
};

export default useInitialState;
