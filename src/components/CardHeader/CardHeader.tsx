import { useTranslation } from 'react-i18next';
import { engTime, hebrewTime, uaTime } from '../../common/helpful-functions';
import { CardHeaderProps } from '../../common/types-and-interfaces';

import './CardHeader.scss';


export const CardHeder: React.FC<CardHeaderProps> = ({ name, secondName, weather, dt, iconca }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className='weather-card__header'>
            <div className='weather-card__header-left'>
                <h3 className='weather-card__header-title'>{name}, {secondName}</h3>
                <p className='weather-card__header-date'>{t("language") === "he" ? hebrewTime(dt) : t("language") === "ua" ? uaTime(dt) : engTime(dt)}</p>
            </div>
            <div className='weather-card__header__right'>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${iconca}.png`} alt="weather icon" />
                </div>
                <div>
                    <p className='weather-card__header-weather'>{weather}</p>
                </div>
            </div>
        </div>
    );
}