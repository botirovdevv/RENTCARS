import icon1 from '../assets/icons/wallet.svg'
import icon2 from '../assets/icons/user-tick.svg'
import icon3 from '../assets/icons/24-support.svg'
import icon4 from '../assets/icons/messages-2.svg'
import { useTranslation } from 'react-i18next';

interface Offer {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
}

export const useOffers = (): Offer[] => {
    const { t } = useTranslation();
  
    return [
      {
        id: 1,
        title: t('price'),
        subtitle: t('offer1'),
        icon: icon1,
      },
      {
        id: 2,
        title: t('driver'),
        subtitle: t('offer2'),
        icon: icon2,
      },
      {
        id: 3,
        title: t('delivery'),
        subtitle: t('offer3'),
        icon: icon3,
      },

      {
        id: 4,
        title: t('support'),
        subtitle: t('offer4'),
        icon: icon4,
      },
    ];
  };