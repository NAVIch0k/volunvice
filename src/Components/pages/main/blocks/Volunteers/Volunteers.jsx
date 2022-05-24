import React from 'react'

// STYLES
import style from './volunteers.module.scss'

// IMAGES
import person1 from '../../../../../assets/images/volunteers-person1.png'
import person2 from '../../../../../assets/images/volunteers-person2.png'
import person3 from '../../../../../assets/images/volunteers-person3.png'

const Volunteers = () => {
  return (
    <section className={style.volunteers}>
      <h2 className={style.volunteers__title}>Наши активные волонтеры</h2>
      <div className={style.volunteers__list}>
        <div className={style.volunteers__volunteer}>
          <img className={style.volunteers__image} src={person1} alt="Волонтер" />
          <div className={style.volunteers__info}>
            <h3 className={style.volunteers__name}>Максимов Артем</h3>
            <p className={style.volunteers__about}>
              Оказал помощь более чем в 30 проектах. Артем стал обладателем почетных премий, благодаря его настойчивости и желанию быть полезным обществу.
            </p>
          </div>
        </div>
        <div className={style.volunteers__volunteer}>
          <img className={style.volunteers__image} src={person2} alt="Волонтер" />
          <div className={style.volunteers__info}>
            <h3 className={style.volunteers__name}>Андрей Павлов</h3>
            <p className={style.volunteers__about}>
              Оказал помощь более чем в 25 проектах. Андрей стал обладателем почетных премий, благодаря его настойчивости и желанию быть полезным обществу.
            </p>
          </div>
        </div>
        <div className={style.volunteers__volunteer}>
          <img className={style.volunteers__image} src={person3} alt="Волонтер" />
          <div className={style.volunteers__info}>
            <h3 className={style.volunteers__name}>Петр Клубников</h3>
            <p className={style.volunteers__about}>
              Оказал помощь более чем в 23 проектах. Петр стал обладателем почетных премий, благодаря его настойчивости и желанию быть полезным обществу.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Volunteers
