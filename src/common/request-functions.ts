import axios from 'axios';
import { MY_OPENWEATHERMAP_API_KEY } from "./api-keys";
import { WeatherData } from "./types-and-interfaces";

export const fetchDataMyWeather = async (latitude: number, longitude: number, setWeather: React.Dispatch<React.SetStateAction<WeatherData | null>>) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${MY_OPENWEATHERMAP_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network Error');
    }
    const data = await response.json();
    setWeather(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataOneCard = async (city: string, setOneCardWeather: React.Dispatch<React.SetStateAction<any>>) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_OPENWEATHERMAP_API_KEY}`);

    if (response.status !== 200) {
      throw new Error('Network Error');
    }

    const data = await response.data;
    setOneCardWeather(data);

  } catch (error) {
    console.log('Some error:', error);
  }
};