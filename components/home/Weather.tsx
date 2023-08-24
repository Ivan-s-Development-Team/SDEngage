import React from 'react';
import Image from 'next/image';

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

const Weather: React.FC<{ data: WeatherData }> = ({ data }) => {
  return (
    <div className='relative flex flex-col items-center justify-center max-w-[500px] w-full h-full m-auto p-4 text-gray-300 z-10'>
      {/* Temperature and weather icon */}
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)}°C</p>
      </div>
      
      {/* Weather details */}
      <div className='bg-black/50 relative p-8 rounded-md mt-40'>
        <p className='text-2xl text-center pb-6'>Clima en {data.name}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='font-bold text-2xl pr-10'>{data.main.feels_like.toFixed(0)}°C</p>
            <p className='text-xl pr-10'>Sensación térmica</p>
          </div>
          <div>
            <p className='font-bold text-2xl pr-10'>{data.main.humidity}%</p>
            <p className='text-xl pr-10'>Humedad</p>
          </div>
          <div>
            <p className='font-bold text-2xl pr-10'>{data.wind.speed.toFixed(0)} km/h</p>
            <p className='text-xl pr-10'>Vientos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
