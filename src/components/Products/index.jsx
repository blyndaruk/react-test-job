import React, { useEffect, useState } from 'react';

import { products as productsMock } from '../../products';
import BaseSelect from '../UI/BaseSelect';
import { useSortedProducts } from '../../hooks/useSortedProducts';

import styles from './Products.module.scss'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState({ sort: '' })
  const { sort } = filter

  useEffect(() => {
    setProducts(productsMock) // simulate API but without async
  }, [])

  const sortedProducts = useSortedProducts(products, sort)

  return (
    <div className={styles.products}>
      Sort By
      <br/>
      <BaseSelect
        value={sort}
        options={[
          { name: 'By Price', value: 'price' },
          { name: 'By Count', value: 'count' }
        ]}
        defaultValue="Sort By"
        onChange={(method) => setFilter({ ...filter, sort: method })}
      />

      {sortedProducts.map(({ id, title, price, count }) => (
        // without separate component for faster development
        <div key={id} className={styles['products__item']}>
          <h2>{title} (id: {id})</h2>
          <div>Count: {count}</div>
          <div>Price: {price}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;
