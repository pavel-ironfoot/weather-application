export interface WeatherCardProps {
  celsius:boolean;
  iconca:string;
  weather:string;
  dt:number;
  index:number;
  deleteButton: boolean;
  name: string;
  secondName: string;
  temperature: number;
  feels_like: number;
  humidity: number;
  speed: number;
  pressure: number;
}
export interface WeatherData {
  name: string;
  sys: { country: string }
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  }
  weather: {
    description: string;
    main:string;
    icon:string
  }[];
}

export interface OneCardProps{
  celsius:boolean;
  city:string;
  index:number;
}
interface WeatherDataa {
  temp: number;
  dt: string;
}

export interface TemperatureChartProps {
  celciusFahrenheit:boolean;
  dataForecast: WeatherDataa[];
  temperature:number;
}

export interface ModalMistakeProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

export interface TownFormData {
  town: string;
}

export interface CardHeaderProps {
  name: string;
  secondName: string;
  weather: string;
  dt: number;
  iconca: string;
}

export interface CardFooterProps {
  celciusFahrenheit: boolean;
  handleCelciusFahrenheit: (value: boolean, city: string) => void;
  feels_like: number;
  humidity: number;
  speed: number;
  pressure: number;
  name: string;
  temperature: number;
}

export interface CurrentElemType {
  celsius: boolean;
  city: string;
}