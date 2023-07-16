import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { OneCard } from '../OneCard';
import { updateCards } from '../../store/cardsSlice';
import { changeCardsDrop } from '../../common/helpful-functions';
import { CurrentElemType } from '../../common/types-and-interfaces';

import './AllCards.scss';


export const AllCards = () => {
    const cards = useSelector((state: RootState) => state.allCards.cards);
    const [currentElem, setCurrentElem] = useState<CurrentElemType>({ celsius: true, city: '' });
    const [dragCardLight, setDragCardLight] = useState<string>('');
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCards = localStorage.getItem('cardsAll');
        if (storedCards) {
            dispatch(updateCards(JSON.parse(storedCards)));
        }
    }, []);

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, elem: any) => {
        setCurrentElem(elem);
        setDragCardLight('one-card-drag');
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, dropCard: any) => {
        changeCardsDrop(cards, dropCard, currentElem);
        localStorage.setItem('cardsAll', JSON.stringify(changeCardsDrop(cards, dropCard, currentElem)));
        dispatch(updateCards(changeCardsDrop(cards, dropCard, currentElem)));
        setDragCardLight('');
    }

    const dragEndHandler = () => {
        setDragCardLight('');
    }

    return (
        <>
            {cards.map((elem, index) => {
                return <div key={elem.city + index}
                    className={dragCardLight}
                    onDragStart={(e) => dragStartHandler(e, elem)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, elem)}
                    onDragEnd={() => dragEndHandler()}
                    draggable={true}
                >
                    <OneCard celsius={elem.celsius} index={index} city={elem.city} />
                </div>
            })}
        </>
    );
}