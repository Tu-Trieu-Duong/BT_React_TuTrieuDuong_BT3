import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
import data from "../dataShoes.json";
import Modal from './Modal';

const ShoesStore = () => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        setProducts(data)
    },[])

  return (
    <div className="mx-10">
      <h1 className="flex justify-center mt-4 mb-10 text-5xl font-bold">Shoes Shop</h1>
      <ProductList productsData={products} setStateModal={setSelectedProduct}/>
      {selectedProduct ? (
        <Modal
          content={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      ) : null}
    </div>
  );
}

export default ShoesStore