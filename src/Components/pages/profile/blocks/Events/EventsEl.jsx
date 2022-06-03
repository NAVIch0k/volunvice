import React from 'react'

// STYLES
import style from './events.module.scss'

const EventsEl = (props) => {

  let date = new Date(props.date)
  let day = date.getDate()
  let month = date.getMonth()
  let dateNme = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

  return (
      <div className={style.events__events}>
        <div className={style.events__block}>
          <img className={style.events__image} src={'http://188.225.83.101/api/static/events/img/'+props.img} alt="Мероприятие" />
          <p className={style.events__start}>{day+" "+dateNme[month]}</p>
          <p className={style.events__about}>{props.name}</p>
        </div>
      </div>
  )
}

export default EventsEl
