import React from "react";

const Modal = ({ content, closeModal }) => {
  if (!content) return null;

    const handleBackgroundClick = (event) => {
    if (event.target.id === "modal-background") {
        closeModal();
    }
    };

  const { name, image, price, description, alias, quantity } = content;

  return (
    <div id="modal-background" className="fixed inset-0 bg-gray-400/50  flex justify-center items-center z-50"
    onClick={handleBackgroundClick}>
      <div className="bg-white p-5 rounded-lg shadow-lg w-80 h-fit">
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <div className="flex justify-center">
          <img src={image} alt={alias} className="w-50 my-3" />
        </div>
        <p className="text-xs">{description}</p>
        <p className="my-4 text-sm text-blue-600 font-semibold">
          Số lượng còn lại: {quantity}
        </p>
        <p className="text-red-500 font-bold mt-2">{price} $</p>
        <button
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
