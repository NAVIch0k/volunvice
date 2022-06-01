import React from 'react'

// STYLES
import style from './events.module.scss'

// IMAGES
import event from '../../../../../assets/images/event-picture.png'

const Events = () => {
  return (
    <section className={style.events}>
      <h2 className={style.events__title}>Мероприятия в этот день</h2>
      <div className={style.events__event}>
        <img className={style.events__image} src={event} alt="Мероприятие" />
        <p className={style.events__date}>25 мая</p>
        <p className={style.events__text}>Конференция “Познай себя и мир вокруг”</p>
      </div>
      <div className={style.events__event}>
        <img className={style.events__image} src={event} alt="Мероприятие" />
        <p className={style.events__date}>25 мая</p>
        <p className={style.events__text}>Конференция “Познай себя и мир вокруг”</p>
      </div>
      <div className={style.events__event}>
        <img className={style.events__image} src={event} alt="Мероприятие" />
        <p className={style.events__date}>25 мая</p>
        <p className={style.events__text}>Конференция “Познай себя и мир вокруг”</p>
      </div>
      <div className={style.events__event}>
        <img className={style.events__image} src={event} alt="Мероприятие" />
        <p className={style.events__date}>25 мая</p>
        <p className={style.events__text}>Конференция “Познай себя и мир вокруг”</p>
      </div>
    </section>
  )
}

export default Events
