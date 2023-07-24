import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    // Assuming you have a backend API to update user data
    try {
      // Send the updated data to the backend and update user state
      // Example: await axios.put('/updateProfile', editedUser);
      // You should replace "/updateProfile" with your backend API endpoint
      // After successful update, setEditing(false) to exit edit mode
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">User Profile</h2>
      {editing ? (
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">
              Name:
              <input
                type="text"
                name="displayName"
                value={editedUser.displayName}
                onChange={handleChange}
                className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </label>
          </div>
          <div>
            <label className="block">
              Email:
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </label>
          </div>
          {/* Add other editable fields here */}
          <div className="col-span-2 flex justify-center">
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {user.displayName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Display other user details here */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
