import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import img from '../assets/car.png'
import playmarketimg from '../assets/images/playmarket.png'
import appstoreimg from '../assets/images/appstore.png'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="main">
      <nav className='nav'>
        <div className={isOpen ? "nav-bg active" : "nav-bg"} onClick={() => setIsOpen(false)}></div>
        <div className="container">
          <div className="nav-content">
            <a href='/' className="nav-logo">
              <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_46_26130)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8619 22.5344C11.6945 22.5344 10.5781 22.3138 9.55404 21.9102L5.87842 24.3015C7.88879 25.6047 10.2877 26.3609 12.8619 26.3609C17.6219 26.3609 21.7785 23.7753 24.0019 19.9319L20.6884 18.0177C19.125 20.7183 16.2056 22.5344 12.8619 22.5344Z" fill="#1572D3" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27734 3.92239L8.06235 13.5009L4.27734 23.0776L10.2538 19.1888L19.0006 13.5009L10.2538 7.81114L4.27734 3.92239Z" fill="#1572D3" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8618 4.46554C16.2056 4.46554 19.1249 6.28167 20.6883 8.98229L24.0019 7.0681C21.7765 3.22462 17.6219 0.639038 12.8618 0.639038C10.2857 0.639038 7.88872 1.39529 5.87646 2.69845L9.55398 5.08978C10.578 4.6862 11.6926 4.46554 12.8618 4.46554Z" fill="#1572D3" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82885 21.5481L4.58274 17.1238L6.0198 13.499L4.58274 9.87621L2.82885 5.45187C1.05988 7.65461 0 10.4533 0 13.5009C0 16.5467 1.05988 19.3454 2.82885 21.5481Z" fill="#1572D3" />
                </g>
                <defs>
                  <clipPath id="clip0_46_26130">
                    <rect width="24" height="25.7219" fill="white" transform="translate(0 0.639038)" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="nav-logo_text">RENTCARS</h1>
            </a>

            <ul className={isOpen ? "nav-links show" : "nav-links"}>
              <Link className='nav-link' to="/">{t('home')}</Link> {' '}
              <Link className='nav-link' to="/cars">{t('cars')}</Link> {' '}
              <Link className='nav-link' to="/about">{t('about')}</Link> {' '}
              <Link className='nav-link' to="/contact">{t('contact')}</Link>

              <button className="nav-menu_close" onClick={() => setIsOpen(false)}>
                <CgClose />
              </button>
            </ul>

            <div className="nav-join">
              <LanguageSwitcher currentLang={i18n.language} onChange={(lang) => i18n.changeLanguage(lang)} />
              <Link to="/" className='nav-sign_in'>{t('sign-in')}</Link>
              <Link to="/" className='nav-user'>
                <FaUser />
              </Link>
              <Link to="/" className='nav-sign_up'>{t('sign-up')}</Link>
              <button className="nav-menu" onClick={() => setIsOpen(true)}>
                <CgMenuRightAlt />
              </button>
            </div>
          </div>
        </div>
      </nav>

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

    </div>
  )
}

export default Navbar
