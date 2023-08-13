"use client";

import React, { useState } from 'react';

const ComplaintForm = ({ onSubmit }) => {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(complaint);
    setComplaint('');
  };

  const Header = () => {
    return (
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <img src="/your-logo.png" alt="Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-semibold">Government Complaint Portal</h1>
        </div>
        <button className="text-gray-600 hover:text-gray-800" onClick={() => console.log('Logout')}>
          Logout
        </button>
      </header>
    );
  };

  return (
    <form className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Submit a Complaint</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Enter your complaint..."
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
      ></textarea>
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={handleSubmit}
      >
        Submit Complaint
      </button>
    </form>
  );
};

const Home = () => {
  const handleComplaintSubmit = (complaint) => {
    // Here you can implement the logic to send the complaint to the government office
    console.log('Complaint submitted:', complaint);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold">Government Complaint Portal</h1>
        <p className="text-gray-600">Submit your complaints here</p>
      </header>
      <main>
        <ComplaintForm onSubmit={handleComplaintSubmit} />
      </main>
    </div>
  );
};

export default Home;