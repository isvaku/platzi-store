import { useEffect, useState } from 'react';

const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

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
      console.log(response);
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setCart([]);
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
