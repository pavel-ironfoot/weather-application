import { DropDownMenu } from '../DropDownMenu';
import './Header.scss';

export const Header = () => {
    return (
        <header className='header'>
            <div>
                <DropDownMenu />
            </div>
        </header>
    );
}