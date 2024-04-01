import React, { useEffect } from 'react';
import { useQuery } from "react-query";
import { GetProductsApiResponse, Product } from "../model";
import useSearchTextStore from "./searchTextState";

const useQueryProducts = () => {
  const { searchText } = useSearchTextStore(state => state);

  const { data, refetch } = useQuery<GetProductsApiResponse>('products', () =>
    fetch(`https://dummyjson.com/products/search?q=${searchText}`).then(res =>
      res.json()
    )
  );
  useEffect(() => {
    refetch();
  }, [searchText]);
  return { products: data?.products };
};

export default useQueryProducts;