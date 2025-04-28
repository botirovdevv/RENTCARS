import { useTranslation } from 'react-i18next'
import { useSteps } from '../data/steps'

const Work = () => {
    const { t } = useTranslation()
    const steps = useSteps()
  return (
    <section className="work">
      <div className="container">
        <div className="work-content">
          <h3 className="work-title">{t('how-it-work')}</h3>
          <p className="work-subtitle">{t('step')}</p>

          <div className="work-steps">
            {
              steps.map((step) => (
                <div className="work-step">
                  <div className="work-step_icon">
                    <img src={step.icon} alt="location" />
                  </div>
                  <h1 className="work-step_title">
                    {step.title}
                  </h1>
                  <p className="work-step_subtitle">{step.subtitle}</p>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Work