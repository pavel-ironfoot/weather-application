import { useEffect, useState } from 'react';
import { WeatherCardProps } from '../../common/types-and-interfaces';
import { kelvinToCelcius } from '../../common/helpful-functions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrentCard, updateCards } from '../../store/cardsSlice';
import { MY_OPENWEATHERMAP_API_KEY } from '../../common/api-keys';
import { TemperatureChart } from '../TemperatureChart';
import { RootState } from '../../store';
import { CardFooter } from '../CardFooter';
import { CardHeder } from '../CardHeader';

import './WeatherCard.scss';


export const WeatherCard: React.FC<WeatherCardProps> = ({ celsius, iconca, weather, dt, index, name, secondName, temperature, feels_like, humidity, speed, pressure, deleteButton }) => {
    const [celciusFahrenheit, setCelciusFahrenheit] = useState<boolean>(celsius);
    const cards = useSelector((state: RootState) => state.allCards.cards);
    const dispatch = useDispatch();
    const [forecastArr, setForecastArr] = useState([]);

    useEffect(() => {
        if (!deleteButton) {
            if (localStorage.getItem('myWeatherCard')) setCelciusFahrenheit(localStorage.getItem('myWeatherCard') === 'true')
        }
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${MY_OPENWEATHERMAP_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setForecastArr(data.list.map((obj: any) => ({ temp: kelvinToCelcius(obj.main.temp), dt: obj.dt_txt })).filter((obj: any) => obj.dt.endsWith('15:00:00')));
            })
            .catch(error => console.log(error));
    }, []);

    const deleteCard = () => {
        dispatch(deleteCurrentCard(index));
        const newCards = cards.filter((elem: any, i: number) => i !== index);
        localStorage.setItem('cardsAll', JSON.stringify(newCards));
    }

    const handleCelciusFahrenheit = (value: boolean, city: string) => {
        if (deleteButton) {
            setCelciusFahrenheit(value)
            const newCards = cards.map((elem) => {
                if (elem.city === city) {
                    return { ...elem, celsius: value }
                } else {
                    return elem;
                }
            })
            dispatch(updateCards(newCards));
            localStorage.setItem('cardsAll', JSON.stringify(newCards));
        } else {

            setCelciusFahrenheit(value)
            localStorage.setItem('myWeatherCard', JSON.stringify(value));
        }
    }
    return (
        <div className={`weather-card ${kelvinToCelcius(temperature) >= 0 ? 'hot' : ''}`}>
            {deleteButton ? <button className='weather-card__button-delete' onClick={deleteCard}>+</button> : <></>}
            <CardHeder
                name={name}
                secondName={secondName}
                weather={weather}
                dt={dt}
                iconca={iconca}
            />

            {forecastArr.length > 0 && <TemperatureChart
                celciusFahrenheit={celciusFahrenheit}
                temperature={temperature}
                dataForecast={forecastArr}
            />}

            <CardFooter
                temperature={temperature}
                celciusFahrenheit={celciusFahrenheit}
                handleCelciusFahrenheit={handleCelciusFahrenheit}
                feels_like={feels_like}
                humidity={humidity}
                speed={speed}
                pressure={pressure}
                name={name}
            />
        </div>
    );
}