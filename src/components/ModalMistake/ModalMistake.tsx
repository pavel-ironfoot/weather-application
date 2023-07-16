import { useTranslation } from 'react-i18next';
import { ModalMistakeProps } from '../../common/types-and-interfaces';

import './ModalMistake.scss';

export const ModalMistake: React.FC<ModalMistakeProps> = ({ active, setActive }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={active ? 'modal-mistake modal-mistake__active' : 'modal-mistake'}
            onClick={() => setActive(false)}
        >
            <div className='modal-mistake__content'
                onClick={(e) => e.stopPropagation()}
            >
                <button className='modal-mistake__button' onClick={() => setActive(false)}>+</button>
                <div className="modal-mistake__text">
                    <p>{t("modal1")}</p>
                    <p>{t("modal2")}</p>
                    <p>{t("modal3")}</p>
                </div>
            </div>
        </div>
    );
}