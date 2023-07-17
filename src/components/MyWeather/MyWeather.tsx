import React, { useState, useEffect } from 'react';
import { WeatherCard } from '../WeatherCard';
import { fetchDataMyWeather } from '../../common/request-functions';
import { WeatherData } from '../../common/types-and-interfaces';
import { useTranslation } from 'react-i18next';

import './MyWeather.scss';

export const MyWeather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handlePosition = (position: GeolocationPosition): void => {
      fetchDataMyWeather(position.coords.latitude, position.coords.longitude, setWeather);
    };

    navigator.geolocation.getCurrentPosition(handlePosition);
  }, []);

  if (!weather) {
    return (<div className='my-weather-access'>
      <div className='my-weather-access__in'>
        <h1>
          {t("access")}
        </h1>
        <h1>{t("access1")}</h1>
      </div>
    </div>
    );
  }

  return (
    <div>
      <WeatherCard
        celsius={true}
        weather={weather.weather[0].main}
        iconca={weather.weather[0].icon}
        dt={weather.dt}
        index={777}
        deleteButton={false}
        name={weather.name}
        secondName={weather.sys.country}
        temperature={weather.main.temp}
        feels_like={weather.main.feels_like}
        humidity={weather.main.humidity}
        speed={weather.wind.speed}
        pressure={weather.main.pressure}
      /></div>

  );
};

