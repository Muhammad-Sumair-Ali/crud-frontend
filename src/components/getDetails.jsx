import axios from "axios";
import React, { useState, useEffect } from "react";

const GetDetails = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4"> User All Details</h2>

            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="p-2 text-lg">
              <h3>Name: {user?.name} </h3>
              <h3>Age: {user?.age} </h3>
              <h3>Degree: {user?.degree} </h3>
              <h4>ID: {user?._id} </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetDetails;
