import { AllCards } from '../AllCards';
import { MyWeather } from '../MyWeather';
import { Search } from '../Search';

import './Main.scss';

export const Main = () => {
    return (
        <div className='main'>
            <Search />
            <div className='main-cards'>
                <MyWeather />
                <AllCards />
            </div>
        </div>
    );

}