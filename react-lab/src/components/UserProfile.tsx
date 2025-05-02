import React from "react";
import { User } from "../types/User";

interface UserProfileProps {
  user: User;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          User Profile
        </h2>
        <p>
          <strong>Full Name:</strong> {user.fullname}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Education:</strong> {user.education}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Skills:</strong> {user.skills.join(", ")}
        </p>
        <p>
          <strong>Bio:</strong> {user.bio}
        </p>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
