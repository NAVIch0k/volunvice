import React from 'react'
import style from './content.module.scss'

const ContentEl = (props) => {

    let date = new Date(props.date)
    let day = date.getDate()
    let month = date.getMonth()
    let dateNme = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

    return (
        <div className={style.content__event}>
            <img className={style.content__image} src={'http://188.225.83.101/api/static/events/img/'+props.img} alt="Мероприятие" />
            <p className={style.content__start}>{day+' '+dateNme[month]}</p>
            <p className={style.content__about}>{props.name}</p>
        </div>
    )
}

export default ContentEl
