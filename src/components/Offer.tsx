import img from '../assets/images/audi.png'
import { useTranslation } from 'react-i18next'
import { useOffers } from '../data/offers'


const Offer = () => {
    const { t } = useTranslation()
    const offers = useOffers()
    return (
        <section className="offer">
            <div className="container">
                <div className="offer-content">
                    <div className="offer-images">
                        <img src={img} alt="audi" className="offer-image" />
                    </div>

                    <div className="offer-texts">
                        <h3 className="offer-title">{t('why-choose-us')}</h3>
                        <h1 className="offer-subtitle">{t('offer-title')}</h1>

                        <div className="offer-items">
                            {
                                offers.map((offer) => (
                                    <div className="offer-item" key={offer.id}>
                                        <div className="offer-item_icon">
                                            <img src={offer.icon} alt="icon" />
                                        </div>
                                        <div className="offer-item_texts">
                                            <h1 className="offer-item_title">{offer.title}</h1>
                                            <p className="offer-item_subtitle">{offer.subtitle}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer