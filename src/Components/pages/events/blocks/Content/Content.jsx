import React from 'react'

// STYLES
import style from './content.module.scss'

// IMAGES
import picture from '../../../../../assets/images/events-picture.png'

const Content = () => {
  return (
    <section className={style.content}>
      <h2 className={style.content__title}>Мероприятия</h2>
      <p className={style.content__date}>25.05.2022 - 26.05.2022</p>
      <div className={style.content__filters}>
        <button className={[style.content__button, style.content__button_active].join(' ')}>Помощь организациям</button>
        <button className={style.content__button}>Помощь людям</button>
        <button className={[style.content__button, style.content__button_active].join(' ')}>Помощь городу</button>
        <button className={[style.content__button, style.content__button_clear].join(' ')}>Очистить</button>
      </div>
      <div className={style.content__list}>
        <div className={style.content__event}>
          <img className={style.content__image} src={picture} alt="Мероприятие" />
          <p className={style.content__start}>25 мая</p>
          <p className={style.content__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>

        <div className={style.content__event}>
          <img className={style.content__image} src={picture} alt="Мероприятие" />
          <p className={style.content__start}>25 мая</p>
          <p className={style.content__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>

        <div className={style.content__event}>
          <img className={style.content__image} src={picture} alt="Мероприятие" />
          <p className={style.content__start}>25 мая</p>
          <p className={style.content__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>

        <div className={style.content__event}>
          <img className={style.content__image} src={picture} alt="Мероприятие" />
          <p className={style.content__start}>25 мая</p>
          <p className={style.content__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>

        <div className={style.content__event}>
          <img className={style.content__image} src={picture} alt="Мероприятие" />
          <p className={style.content__start}>25 мая</p>
          <p className={style.content__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>

        <div className={style.content__event}>
          <img className={style.content__image} src={picture} alt="Мероприятие" />
          <p className={style.content__start}>25 мая</p>
          <p className={style.content__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>

        <div className={style.content__event}>
          <img className={style.content__image} src={picture} alt="Мероприятие" />
          <p className={style.content__start}>25 мая</p>
          <p className={style.content__about}>Конференция “Познай себя и мир вокруг”</p>
        </div>
      </div>
    </section>
  )
}

export default Content
