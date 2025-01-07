import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState({ name: '', email: '', age: '' });
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name && userData.email && userData.age) {
      setUserList([...userList, userData]); // Add user to list
      setUserData({ name: '', email: '', age: '' }); // Reset form
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">User Information Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
          />
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="number"
            name="age"
            placeholder="Enter your age"
            value={userData.age}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          {userList.length > 0 ? (
            <ul>
              {userList.map((user, i) => (
                <li key={i} className="mb-2 p-2 border border-gray-300 rounded">
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Age:</strong> {user.age}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No users added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
