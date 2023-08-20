import React, { useState } from 'react';
import { useTheme } from 'next-themes'

const ComplaintForm = () => {
  const [complaintType, setComplaintType] = useState('');
  const [duration, setDuration] = useState('');
  const [firstTime, setFirstTime] = useState(false);
  const [timesSubmitted, setTimesSubmitted] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // You would handle the email sending logic here (using a backend API).

    // For demonstration purposes, let's just log the form data.
    console.log({
      complaintType,
      duration,
      firstTime,
      timesSubmitted,
      description,
    });
  };

  return (
    <>
      <div className="clss mt-6">
        <label htmlFor="complaintType" className="text-[var(--color-black-5)] dark:text-white font-bold block">
          Type of Complaint:
        </label>
        <select
          id="complaintType"
          className={"w-full p-3 border text-[#040506] dark:text-[var(--color-black-8)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#000000] outline-none bg-transparent focus:border-blue-500"}
          value={complaintType}
          onChange={(e) => setComplaintType(e.target.value)}
        >
          <option value="">Select complaint type</option>
          <option value="Flooding">Flooding</option>
          <option value="Potholes">Potholes</option>
        </select>

      </div>
      <div className="mt-5">
        <label htmlFor="duration" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
          How long has the issue gone on for?
        </label>
        <input
          type="text"
          id="duration"
          className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-5 mt-5">
        <label htmlFor="firstTime" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
          Is this your first time filing a complaint?
        </label>
        <label className="inline-block mr-2">
          <input
            type="radio"
            name="firstTime"
            value="yes"
            checked={firstTime}
            onChange={() => setFirstTime(true)}
          />
          Yes
        </label>
        <label className="inline-block">
          <input
            type="radio"
            name="firstTime"
            value="no"
            checked={!firstTime}
            onChange={() => setFirstTime(false)}
          />
          No
        </label>
      </div>
      {!firstTime && (
        <div className="mb-4">
          <label htmlFor="timesSubmitted" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
            How many times have you submitted a complaint about this issue?
          </label>
          <input
            type="number"
            id="timesSubmitted"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg outline-none bg-transparent"
            value={timesSubmitted}
            onChange={(e) => setTimesSubmitted(e.target.value)}
          />
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="description" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
          Describe the problem in detail:
        </label>
        <textarea
          id="description"
          className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg outline-none bg-transparent"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit Complaint
      </button>
    </>
  );
};

export default ComplaintForm;
