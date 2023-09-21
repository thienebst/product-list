import React from 'react';
import { useQuery } from "react-query";

const useQueryCategories = () => {
  const { data } = useQuery<string[]>('categories', () =>
    fetch('https://dummyjson.com/products/categories').then(res =>
      res.json()
    )
  );
  return { data };
};

export default useQueryCategories;