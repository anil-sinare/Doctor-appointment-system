import React, { useState } from 'react';
import profile_img  from '../assets/assets_frontend/anil sinare pic.jpg'

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sinare Anil',
  
    email: 'anilsinare2003@gmail.com',
    address: 'Ganga Nagar Road, Sector No. 28, Akurdi ,Pune',
    gender: 'Male',
    dob: '11/02/2003',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic goes here
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="flex items-center mb-4">
        <img
          src={profile_img}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300 mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <button
            onClick={handleEdit}
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={profile.email}
          readOnly={!isEditing}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className={`w-full p-2 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          value={profile.address}
          readOnly={!isEditing}
          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          className={`w-full p-2 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <input
          type="text"
          value={profile.gender}
          readOnly={!isEditing}
          onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
          className={`w-full p-2 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          value={profile.dob}
          readOnly={!isEditing}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          className={`w-full p-2 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
        />
      </div>

      {isEditing && (
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save Information
        </button>
      )}
    </div>
  );
};

export default MyProfile;

