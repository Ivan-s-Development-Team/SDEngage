"use client";
import React, { useState, useEffect } from 'react';


const ComplaintForm = () => {
  const [complaintType, setComplaintType] = useState('');
  const [duration, setDuration] = useState('');
  const [firstTime, setFirstTime] = useState(false);
  const [timesSubmitted, setTimesSubmitted] = useState('');
  const [description, setDescription] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if(complaintType.length > 0 && duration.length > 0 && description.length> 0) {
        setButtonDisabled(false);
    } else {
        setButtonDisabled(true)
    }
}, [complaintType.length, duration.length, description.length])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      setLoading(true);
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          complaintType,
          duration,
          firstTime,
          timesSubmitted,
          description,
        }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        setEmailSent(true); 
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally{
      setLoading(false);
    }
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
        className={`w-full block ${
          buttonDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#14A647] hover:bg-[#0A732F]'
        } px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none`}
        disabled={buttonDisabled}
        onClick={handleSubmit}
      >
        {loading
          ? 'Procesando...'
          : buttonDisabled
          ? 'Por favor complete la información necesaria'
          : emailSent
          ? 'Complaint Submitted'
          : 'Submit Complaint'}
      </button>
    </>
  );
};

export default ComplaintForm;


