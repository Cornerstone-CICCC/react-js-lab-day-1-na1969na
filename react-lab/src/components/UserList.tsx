import React from "react";
import { User } from "../types/User";

interface UserListProps {
  users: User[];
  editUser: (user: User) => void;
  deleteUser: (id: string) => void;
  viewUser: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  editUser,
  deleteUser,
  viewUser,
}) => {
  return (
    <div>
      <table className="w-full border-collapse text-left text-gray-700">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-sm font-medium text-gray-600">Full Name</th>
            <th className="p-3 text-sm font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`border-t ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="p-3 w-1/2">{user.fullname}</td>
              <td className="p-3 w-1/2">
                <button
                  onClick={() => viewUser(user)}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-md mr-2 transition-colors"
                >
                  View
                </button>
                <button
                  onClick={() => editUser(user)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-3 py-1 rounded-md mr-2 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-md transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <div className="mt-4 text-center text-gray-500">
          No users available.
        </div>
      )}
    </div>
  );
};

export default UserList;
