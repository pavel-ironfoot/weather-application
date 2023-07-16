import { useEffect, useState } from "react";
import { OneCardProps, WeatherData } from "../../common/types-and-interfaces";
import { fetchDataOneCard } from "../../common/request-functions";
import { WeatherCard } from "../WeatherCard";

export const OneCard: React.FC<OneCardProps> = ({ celsius, city, index }) => {
    const [oneCardWeather, setOneCardWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        fetchDataOneCard(city, setOneCardWeather);
    }, []);

    return (
        <>
            {oneCardWeather ? <WeatherCard
                celsius={celsius}
                weather={oneCardWeather.weather[0].main}
                iconca={oneCardWeather.weather[0].icon}
                dt={oneCardWeather.dt}
                deleteButton={true}
                index={index}
                name={oneCardWeather.name}
                secondName={oneCardWeather.sys.country}
                temperature={oneCardWeather.main.temp}
                feels_like={oneCardWeather.main.feels_like}
                humidity={oneCardWeather.main.humidity}
                speed={oneCardWeather.wind.speed}
                pressure={oneCardWeather.main.pressure}
            /> :
                <></>
            }

        </>
    );
}