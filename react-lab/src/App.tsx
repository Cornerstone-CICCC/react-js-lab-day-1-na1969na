import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { FormData, User } from "./types/User";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: "",
  });
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"form" | "list">("form");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addOrUpdateUser = () => {
    if (selectedUser) {
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? { ...selectedUser, ...formData } : user
        )
      );
    } else {
      setUsers([...users, { ...formData, id: Date.now().toString() }]);
    }
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: "",
    });
    setSelectedUser(null);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user: User) => {
    setFormData({ ...user });
    setSelectedUser(user);
    setActiveTab("form");
  };

  const viewUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="w-1/2 bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
          User Management System
        </h1>
        <div className="flex justify-around mb-6 border-b">
          <button
            onClick={() => setActiveTab("form")}
            className={`py-2 px-4 font-semibold w-1/2 ${
              activeTab === "form"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            } transition-colors`}
          >
            Form
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`py-2 px-4 font-semibold w-1/2 ${
              activeTab === "list"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            } transition-colors`}
          >
            List
          </button>
        </div>
        <div
          className="relative min-h-[600px] transition-all"
          style={{ overflow: "hidden" }}
        >
          {activeTab === "form" && (
            <div className="absolute inset-0">
              <UserForm
                formData={formData}
                setFormData={setFormData}
                addOrUpdateUser={addOrUpdateUser}
                clearForm={clearForm}
              />
            </div>
          )}
          {activeTab === "list" && (
            <div className="absolute inset-0">
              <UserList
                users={users}
                editUser={editUser}
                deleteUser={deleteUser}
                viewUser={viewUser}
              />
            </div>
          )}
        </div>
      </div>
      {isModalOpen && selectedUser && (
        <UserProfile user={selectedUser} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
