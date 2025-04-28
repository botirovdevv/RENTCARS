import icon1 from '../assets/icons/location.svg'
import icon2 from '../assets/icons/calendar.svg'
import icon3 from '../assets/icons/car.svg'
import { useTranslation } from 'react-i18next';


interface Step {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
}

export const useSteps = (): Step[] => {
    const { t } = useTranslation();
  
    return [
      {
        id: 1,
        title: t('location'),
        subtitle: t('title1'),
        icon: icon1,
      },
      {
        id: 2,
        title: t('date'),
        subtitle: t('title2'),
        icon: icon2,
      },
      {
        id: 3,
        title: t('book'),
        subtitle: t('title3'),
        icon: icon3,
      },
    ];
  };