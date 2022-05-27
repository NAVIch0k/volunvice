import React from 'react'

// IMAGES
import organizations from '../../../../../assets/images/help-organizations.png'
import people from '../../../../../assets/images/help-people.png'
import city from '../../../../../assets/images/help-city.png'

// STYLES
import style from './help.module.scss'

const Help = () => {
  return (
    <section className={style.help}>
      <div className={style.help__block}>
        <img className={[style.help__image, style.help__image_organizations].join(' ')} src={organizations} alt="Помощь организациям" />
        <p className={[style.help__title, style.help__title_left].join(' ')}>Помощь организациям</p>
      </div>
      <div className={style.help__block}>
        <img className={[style.help__image, style.help__image_people].join(' ')} src={people} alt="Помощь людям" />
        <p className={style.help__title}>Помощь людям</p>
      </div>
      <div className={style.help__block}>
        <img className={[style.help__image, style.help__image_city].join(' ')} src={city} alt="Помощь городу" />
        <p className={[style.help__title, style.help__title_right].join(' ')}>Помощь городу</p>
      </div>
    </section>
  )
}

export default Help
