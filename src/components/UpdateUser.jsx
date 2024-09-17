import axios from "axios";
import React, { useState, useEffect } from "react";

const UpdateUser = ({ userId, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [age, setAge] = useState(null);



  const updateUserData = async (event) => {
    event.preventDefault();
    const formData = { name, degree, age };
    if (!name ||!degree || age === null) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await axios.put(`http://localhost:5000/api/updateDataById/${userId}`, formData);
      alert("User updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      alert("Update failed. Please try again.");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-yellow-500 text-white px-2 py-2 rounded-lg hover:bg-red-700"
      >
        Update User
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Update User</h2>

            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>

            <form onSubmit={updateUserData}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={user?.name}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder={user?.degree}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder={user?.age}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Update User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
