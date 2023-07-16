import { useTranslation } from 'react-i18next';
import { kelvinToCelcius, kelvinToFahrenheit } from '../../common/helpful-functions';
import { CardFooterProps } from '../../common/types-and-interfaces';

import './CardFooter.scss';


export const CardFooter: React.FC<CardFooterProps> = ({ temperature, name, celciusFahrenheit, handleCelciusFahrenheit, feels_like, humidity, speed, pressure, }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className='weather-card__footer'>
            <div className='weather-card__footer-block weather-card__footer__left'>
                <h3>
                    <span className='weather-card__footer__left-temperature'>
                        {celciusFahrenheit ? <>{kelvinToCelcius(temperature) > 0 ? '+' : ''}{kelvinToCelcius(temperature)}</> : <>{kelvinToFahrenheit(temperature) > 0 ? '+' : ''}{kelvinToFahrenheit(temperature)}</>}
                    </span>
                    <span className='weather-card__footer__left-temperature-changer'>
                        <span onClick={() => handleCelciusFahrenheit(true, name)}>
                            <span className={celciusFahrenheit ? 'weather-card__footer__left__temperature-true' : 'weather-card__footer__left__temperature-false'}>
                                °C
                            </span>
                        </span> <span className='weather-card__footer__left__between'>|</span> <span onClick={() => handleCelciusFahrenheit(false, name)}>
                            <span className={celciusFahrenheit ? 'weather-card__footer__left__temperature-false' : 'weather-card__footer__left__temperature-true'}>
                                °F
                            </span>
                        </span>
                    </span>
                </h3>
                <p>{t("feels")} {celciusFahrenheit ? <>{kelvinToCelcius(feels_like) > 0 ? '+' : ''}{kelvinToCelcius(feels_like)} C</> : <>{kelvinToFahrenheit(feels_like) > 0 ? '+' : ''}{kelvinToFahrenheit(feels_like)} F</>}</p>
            </div>
            <div className='weather-card__footer-block weather-card__footer__right'>
                <p>{t("wind")} <span>{speed}</span> {t("speed")}</p>
                <p>{t("humidity")} <span>{humidity}</span> %</p>
                <p>{t("pressure")} <span>{pressure} </span>{t("pa")}</p>
            </div>
        </div>
    );
}