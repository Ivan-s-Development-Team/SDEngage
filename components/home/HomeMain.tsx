import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import Weather from './Weather';
import PageLayout from '@/components/layout/PageLayout';
import Preloader from '../preloader/Preloader';

interface WeatherData {
  weather: {
    icon: string;
    main: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
}

const Home: React.FC = () => {
  const [city, setCity] = useState<string>('Santo Domingo'); // Set default city
  const [weather, setWeather] = useState<WeatherData>({
    weather: [{ icon: '01d', main: 'Despejado' }],
    main: { temp: 0, feels_like: 0, humidity: 0 },
    wind: { speed: 0 },
    name: 'Santo Domingo',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }

    setCity('');
    setLoading(false);
  };

  useEffect(() => {
    async function fetchDefaultWeather() {
      setLoading(true);

      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }

      setLoading(false);
    }

    fetchDefaultWeather();
  }, []); // Empty dependency array to ensure this effect runs only once, on component mount

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center  pl-96">
        <Head>
          <title>Clima - Aplicación Next</title>
          <meta name='description' content='Generado por la aplicación Next' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
        <Image
          src='https://images.unsplash.com/photo-1611952961634-349806683d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
          layout='fill'
          className='object-cover'
          alt=''
        />
        <div className='flex flex-col items-center justify-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
          >
            <div className="w-3/4"> {/* Center the input */}
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className='bg-transparent border-none text-white focus:outline-none text-2xl w-full'
                type='text'
                placeholder='Buscar ciudad'
              />
            </div>
            <button type='submit'>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather.main && <Weather data={weather} />}
      </div>
    </PageLayout>
  );
};

export default Home;
