import React from "react";

const ProductItem = ({ item, setStateModal }) => {
  const { image, name, price, shortDescription, alias } = item;
  return (
    <div className="border">
      <div>
        <div className="justify-items-center">
          <img src={image} alt={alias} className="w-100" />
        </div>
        <div className="px-6">
          <h1 className="text-2xl font-bold my-2">{name}</h1>
          <p className="text-sm">{shortDescription}</p>
          <p className="text-sm my-2 text-red-500 font-bold">${price}</p>
          <button
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setStateModal(item)}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
