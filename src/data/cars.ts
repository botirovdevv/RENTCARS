import { useTranslation } from 'react-i18next';
import img1 from '../assets/images/jaguar.png'
import img2 from '../assets/images/fullaudi.png'
import img3 from '../assets/images/bmw.png'
import img4 from '../assets/images/huracan.png'

interface Car {
    id: number;
    title: string;
    rate: number;
    passagers: number | string,
    auto: string,
    aircondition: string,
    doors: number | string,
    price: number,
    img: string
}

export const useCars = (): Car[] => {
    const { t } = useTranslation();
  
    return [
        {
            id: 1,
            img: img1,
            title: "Jaguar XE L P250",
            rate: 4.8,
            passagers: `4 ${t('passagers')}`,
            auto: t('auto'),
            aircondition: t('air-conditioner'),
            doors: `4 ${t('doors')}`,
            price: 1800
        },

        {
            id: 2,
            img: img2,
            title: "Audi R8",
            rate: 4.6,
            passagers: `2 ${t('passagers')}`,
            auto: t('auto'),
            aircondition: t('air-conditioner'),
            doors: `2 ${t('doors')}`,
            price: 2100
        },

        {
            id: 3,
            img: img3,
            title: "BMW M3",
            rate: 4.5,
            passagers: `4 ${t('passagers')}`,
            auto: t('auto'),
            aircondition: t('air-conditioner'),
            doors: `4 ${t('doors')}`,
            price: 1600
        },

        {
            id: 4,
            img: img4,
            title: "Lamborghini Huracan",
            rate: 4.3,
            passagers: `2 ${t('passagers')}`,
            auto: t('auto'),
            aircondition: t('air-conditioner'),
            doors: `2 ${t('doors')}`,
            price: 2300
        }
    ];
  }; 