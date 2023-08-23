// pages/api/weather.js
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = 'f1e2a371e3c6b7002368df83e62e2811';
  const city = req.query.city || 'yourDefaultCity'; // You can pass the city as a query parameter

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric', // Use metric units for temperature in Celsius
      },
    });

    const weatherData = response.data;
    res.status(200).json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
