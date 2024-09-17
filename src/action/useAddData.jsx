import axios from "axios";
import { useState } from "react";

export const useAddData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addUserData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const allData = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        "http://localhost:5000/api/createData",
        allData
      );
      console.log("User created successfully:", response.message);
      alert("User created successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("User creation failed. Please try again.");
    }
  };

  return {
    addUserData,
    isModalOpen,
    setIsModalOpen,
  };
};
