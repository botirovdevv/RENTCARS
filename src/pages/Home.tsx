import Work from "../components/Work"
import img from '../assets/car.png'
import playmarketimg from '../assets/images/playmarket.png'
import appstoreimg from '../assets/images/appstore.png'
import '../i18n/i18n'
import { t } from "i18next"
import i18n from "../i18n/i18n"

const Home = () => {
  return (
    <main>
      <header className="header">
          <div className="header-content">
            <div className="header-texts">
              <h1 className="header-title">
                {t('header-title')}

                <span className="header-text_underline">{t('blue-title')}
                  <span className={i18n.language === 'en' ? "header-underline" : "header-underline active"}>
                    <svg width="135" height="20" viewBox="0 0 135 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M134.398 2.44549C57.1256 -2.5909 23.8505 5.91274 1.51269 9.4328C1.16554 12.3701 1.29738 14.7861 0.927661 19.4528C60.8229 -0.00283289 100.753 3.19444 134.353 4.43383C134.367 4.06436 134.357 3.5539 134.398 2.44549Z" fill="#1572D3" />
                    </svg>
                  </span>
                </span>
              </h1>
              <p className="header-subtitle">
                {t('header-subtitle')}
              </p>

              <div className="header-apps">
                <img src={playmarketimg} alt="play market" />
                <img src={appstoreimg} alt="play market" />
              </div>
            </div>

            <div className="header-image">
              <div className="header-bg"></div>
              <img src={img} className='header-img' alt="car photo" />
            </div>
          </div>
      </header>
      <Work/>

    </main>
  )
}

export default Home