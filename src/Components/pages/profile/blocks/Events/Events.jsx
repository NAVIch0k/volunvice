import React, { useState } from 'react'
import EventsEl from './EventsEl'

// STYLES
import style from './events.module.scss'
import { useSelector } from 'react-redux'

const Events = (props) => {

  const { events } = useSelector(state => state.AccountEvents) 
  let [isArhive,SetIsArhive]=useState('')
  const SwapEvents=(arhive=false)=>{
    if (arhive!=isArhive) {
      props.GetAccountEvents(arhive)
      SetIsArhive(arhive)
    }
  }

  return (
    <section className={style.events}>
      <h2 className={style.events__title}>Мероприятия</h2>
      <div className={style.events__search}>
        <p className={!isArhive?style.events__link+' '+style.events__link_active:style.events__link} href="/" onClick={()=>SwapEvents(false)}>
          Актуальные
        </p>
        <p className={isArhive?style.events__link+' '+style.events__link_active:style.events__link} href="/" onClick={()=>SwapEvents(true)}>
          Архив
        </p>
        <div className={style.events__sort}>
          <p className={style.events__text}>По дате</p>
          <div className={style.events__date}>
            <button className={style.events__button}>Сначала новые</button>
            <button className={[style.events__button, style.events__button_active].join(' ')}>Сначала старые</button>
          </div>
        </div>
      </div>
      <div className={style.events__events}>
        {
          events.map(e => <EventsEl img={e.image_path} date={e.date_start} name={e.name} />)
        }
      </div>
    </section>
  )
}

export default Events
