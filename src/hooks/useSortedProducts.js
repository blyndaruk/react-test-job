import { useMemo } from 'react';

export const useSortedProducts = (products, sort) => {
  return useMemo(() => {
    return sort ? [...products].sort((a, b) => a[sort] - b[sort]) : products
  }, [sort, products])
}
