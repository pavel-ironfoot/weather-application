import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import lengImg from './../../images/Icon-material-language.png'

import './DropDownMenu.scss';

export const DropDownMenu = () => {
  const [selectedOption, setSelectedOption] = useState<string>(() => {
    const storedOption = localStorage.getItem('selectedOption');
    return storedOption || 'en';
  });

  const { t, i18n } = useTranslation();

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);
    i18n.changeLanguage(newOption);
    localStorage.setItem('selectedOption', newOption);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedOption);
  }, [selectedOption, i18n]);

  return (
    <div className='drop-down-menu'>
      <img src={lengImg} alt="icon" />
      <select value={selectedOption} onChange={handleOptionChange}>
        <option className='drop-down-menu__option' value="en">EN</option>
        <option className='drop-down-menu__option' value="ua">UA</option>
        <option className='drop-down-menu__option' value="he">HE</option>
      </select>
    </div>
  );
};
