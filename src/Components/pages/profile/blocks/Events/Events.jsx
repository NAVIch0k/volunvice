import React from 'react'

// STYLES
import style from './events.module.scss'

// IMAGES
import event1 from '../../../../../assets/images/event-1.png'
import event2 from '../../../../../assets/images/event-2.png'

const Events = () => {
  return (
    <section className={style.events}>
      <h2 className={style.events__title}>Мероприятия</h2>
      <div className={style.events__search}>
        <a className={[style.events__link, style.events__link_active].join(' ')} href="/">
          Актуальные
        </a>
        <a className={style.events__link} href="/">
          Архив
        </a>
        <div className={style.events__sort}>
          <p className={style.events__text}>По дате</p>
          <div className={style.events__date}>
            <button className={style.events__button}>Сначала новые</button>
            <button className={[style.events__button, style.events__button_active].join(' ')}>Сначала старые</button>
          </div>
        </div>
      </div>
      <div className={style.events__events}>
        <div className={style.events__block}>
          <img className={style.events__image} src={event1} alt="Мероприятие" />
          <p className={style.events__start}>25 мая</p>
          <p className={style.events__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>
        <div className={style.events__block}>
          <img className={style.events__image} src={event2} alt="Мероприятие" />
          <p className={style.events__start}>26 мая</p>
          <p className={style.events__about}>Форум “Жизнь морских черепашек”</p>
        </div>
        <div className={style.events__block}>
          <img className={style.events__image} src={event1} alt="Мероприятие" />
          <p className={style.events__start}>25 мая</p>
          <p className={style.events__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>
      </div>
    </section>
  )
}

export default Events
