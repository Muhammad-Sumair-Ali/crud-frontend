import axios from "axios";
import { useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState(null);

  const fetchAllUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/getData");
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    fetchAllUsers,
  };
};

export const deleteUser = async (userId) => {
  if (confirm("Are you sure you want to")) {
    try {
      await axios.delete(`http://localhost:5000/api/deleteDataById/${userId}`);
      alert("User deleted successfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Operation cancelled");
  }
};
