import React from "react";
import { FormData } from "../types/User";

interface UserFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  addOrUpdateUser: () => void;
  clearForm: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  formData,
  setFormData,
  addOrUpdateUser,
  clearForm,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "skills" ? [...prev.skills, value] : value,
    }));
  };

  const handleSkillChange = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  return (
    <div className="p-3">
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Education
          </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none"
          >
            <option value="">Select</option>
            <option value="Grade school">Grade school</option>
            <option value="High school">High school</option>
            <option value="College">College</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Gender</label>
          <div className="flex items-center gap-4">
            {["Male", "Female", "Other"].map((gender) => (
              <label key={gender} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                />
                {gender}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Skills</label>
          <div className="flex flex-wrap gap-4">
            {["TypeScript", "React", "Node", "NoSQL"].map((skill) => (
              <label key={skill} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
          ></textarea>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={addOrUpdateUser}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            Save User
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
