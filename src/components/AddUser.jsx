import axios from "axios";
import React, { useState } from "react";
import { useAddData } from "../action/useAddData";

const AddUser = () => {
  const { addUserData, isModalOpen, setIsModalOpen } = useAddData();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="btn bg-blue-800 text-white p-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Add New User
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>

            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>

            <form onSubmit={addUserData}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="degree"
                  placeholder="Enter Degree"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="number"
                  name="age"
                  placeholder="Enter Age"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
