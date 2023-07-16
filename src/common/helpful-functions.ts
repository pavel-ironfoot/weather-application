export const kelvinToCelcius = (temperatureInKelvin: number) => {
    return Math.round(temperatureInKelvin - 273.15);
}

export const kelvinToFahrenheit = (temperatureInKelvin: number) => {
    return Math.round((temperatureInKelvin - 273.15) * 9 / 5 + 32);
}
export const celsiusToFahrenheit = (celsius: number): number => {
    const fahrenheit = Math.round((celsius * 9 / 5) + 32);
    return fahrenheit;
}
export const engTime = (timestamp: number) => {
    const dt = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    };
    const formattedDate = dt.toLocaleString('en-US', options);
    return formattedDate;
}

export const uaTime = (timestamp: number) => {
    const dt = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric'
    };
    const formattedDate = dt.toLocaleString('uk-UA', options);

    return formattedDate;
}

export const hebrewTime = (timestamp: number) => {
    const dt = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric'
    };
    const formattedDate = dt.toLocaleString('he-IL', options);

    return formattedDate;
}

export const colorGrOne = (temperature: number) => {
    if (kelvinToCelcius(temperature) >= 0) {
        return 'rgba(255, 244, 244, 0.03)';
    } else {
        return 'rgba(255, 244, 244, 0.03)'
    }
}

export const colorGrZero = (temperature: number) => {
    if (kelvinToCelcius(temperature) >= 0) {
        return 'rgba(255, 162, 91, 0.73)';
    } else {
        return 'rgba(91, 140, 255, 0.73)'
    }
}

export const changeCardsDrop = (cards:{city:string,celsius:boolean}[],dropCard:{city:string,celsius:boolean},currentElem:{city:string,celsius:boolean}) => {
    const newCards = cards.map((el) => {
        if (el.city === dropCard.city) {
            return currentElem;
        } else if (el.city === currentElem.city) {
            return dropCard;
        }
        return el;
    });
    return newCards;
}
