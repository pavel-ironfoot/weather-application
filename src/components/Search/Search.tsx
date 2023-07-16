import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, } from '../../store/cardsSlice';
import { RootState } from '../../store';
import axios from 'axios';
import { MY_OPENWEATHERMAP_API_KEY } from '../../common/api-keys';
import { useState } from 'react';
import { ModalMistake } from '../ModalMistake';
import { TownFormData } from '../../common/types-and-interfaces';

import './Search.scss';


export const Search = () => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.allCards.cards);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm<TownFormData>({ mode: 'onChange' });

  const { t, i18n } = useTranslation();

  const onSubmit: SubmitHandler<TownFormData> = async (data) => {
    const fetchDataOn = async (city: string) => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_OPENWEATHERMAP_API_KEY}`);
        if (response.status !== 200) {
          throw new Error('Network Error');
        } else {
          return await response.data;
        }
      } catch (error) {
        setActive(true);
        console.log('Some error:', error);
      }
    };

    await fetchDataOn(data.town)
      .then((information) => {
        if (cards.some(item => item.city === information.name)) {
          setActive(true);
        } else {
          dispatch(addCard({ 'city': information.name, 'celsius': 'yes' }));
          const newCards = [...cards];
          newCards.push({ 'city': information.name, 'celsius': true })
          localStorage.setItem('cardsAll', JSON.stringify(newCards));
        }
      })
      .catch((error) => {
        console.log('Some error:', error);
      });
    reset();
  };


  return (
    <div className='search'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='search__block'>
          <div>
            <input
              autoComplete="off"
              className='search__input'
              placeholder={t("city")}
              type="text"
              style={{ direction: t("language") === "he" ? "rtl" : "ltr" }}
              {...register('town', {
                required: t("mistake1"),
                minLength: {
                  value: 2,
                  message: t("mistake2")
                },
                maxLength: {
                  value: 21,
                  message: t("mistake3")
                },
              })}
            />

            <button className="add-category__button" disabled={!isValid} type="submit">
              {t("button")}
            </button>
            <div className="add-category__errors">
              <p>{errors.town?.message}</p>
            </div>
          </div>
        </div>
      </form>
      <ModalMistake
        active={active}
        setActive={setActive}
      />
    </div>
  );
};
