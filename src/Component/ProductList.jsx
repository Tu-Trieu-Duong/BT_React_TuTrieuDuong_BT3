import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productsData, setStateModal }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {productsData.map((product) => (
        <ProductItem
          key={product.id}
          item={product}
          setStateModal={setStateModal}
        />
      ))}
    </div>
  );
};

export default ProductList