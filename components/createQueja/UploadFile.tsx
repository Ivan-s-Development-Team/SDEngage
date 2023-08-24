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
  const [sector, setSector] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    if(complaintType.length > 0 && duration.length > 0 && description.length> 0 && address.length > 0 && contact.length > 0 && sector.length > 0) {
        setButtonDisabled(false);
    } else {
        setButtonDisabled(true)
    }
}, [complaintType.length, duration.length, description.length, address.length, contact.length, sector.length])

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
          sector,
          address,
          contact,
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
        Tipo de denuncia:
        </label>
        <select
          id="complaintType"
          className={"w-full p-3 border text-[#040506] dark:text-[var(--color-black-8)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#000000] outline-none bg-transparent focus:border-blue-500"}
          value={complaintType}
          onChange={(e) => setComplaintType(e.target.value)}
        >
          <option value="">Seleccione el tipo de reclamación</option>
          <option value="Flooding">Inundaciones</option>
          <option value="Potholes">Baches</option>
        </select>

      </div>
      <div className="mt-5">
        <label htmlFor="duration" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
        ¿Cuánto tiempo ha durado el problema?
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
        ¿Es la primera vez que presenta una queja?
        </label>
        <label className="inline-block mr-2">
          <input
            type="radio"
            name="firstTime"
            value="yes"
            checked={firstTime}
            onChange={() => setFirstTime(true)}
          />
          Si
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
           ¿Cuántas veces ha presentado una queja sobre este tema?
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
      <div className="clss mt-6">
        <label htmlFor="sector" className="text-[var(--color-black-5)] dark:text-white font-bold block">
        Sector:
        </label>
        <select
          id="sector"
          className={"w-full p-3 border text-[#040506] dark:text-[var(--color-black-8)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#000000] outline-none bg-transparent focus:border-blue-500"}
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
                      <option value="--Sector--">--Sector--</option>
											<option value="Alma Rosa II">Alma Rosa II</option>
											<option value="Ana Teresa Balaguer">Ana Teresa Balaguer</option>
											<option value="Arismar">Arismar</option>
											<option value="Barrio Ámbar">Barrio Ámbar</option>
											<option value="Barrio La Isla">Barrio La Isla</option>
											<option value="Brisas del Este">Brisas del Este</option>
											<option value="Brisas del Edén">Brisas del Edén</option>
											<option value="Cansino Adentro">Cansino Adentro</option>
											<option value="Corales del Este">Corales del Este</option>
        </select>

      </div>
      <div className="mt-5">
        <label htmlFor="adress" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
        Dirrecion
        </label>
        <input
          type="text"
          id="adress"
          className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="contact" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
        Correo electrónico y número de teléfono
        </label>
        <input
          type="text"
          id="contact"
          className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="text-[var(--color-gray-5)] dark:text-white font-bold block">
        Describa detalladamente el problema:
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


