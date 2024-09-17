import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateUser from "./UpdateUser";
import { useGetData } from "../action/useGetData";
import { deleteUser } from "../action/useGetData";
import GetDetails from "./getDetails";

const UserListing = () => {
  const { data, fetchAllUsers } = useGetData();
  useEffect(() => {
    fetchAllUsers();
  }, [data && data]);


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white shadow-lg rounded-lg">
    
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Fullname</th>
                <th className="px-6 py-3 text-left">Age</th>
                <th className="px-6 py-3 text-left">Degree</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user, index) => (
                <tr key={user._id} className="border-b">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.age}</td>
                  <td className="px-6 py-4">{user.degree}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                  <GetDetails user={user} />
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                    <UpdateUser userId={user._id} user={user} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserListing;
