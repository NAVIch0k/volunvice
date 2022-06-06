import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

// STYLES
import style from './content.module.scss'
import ContentEl from './ContentEl'

const Content = () => {

  let minDateInput = useRef()
  let maxDateInput = useRef()

  const events = useSelector(state => state.Events.events)
  const totalCount = useSelector(state => state.Events.total_count)

  let [minDate, SetMinDate] = useState('1990-01-01')
  let [maxDate, SetMaxDate] = useState('3000-01-01')


  let changeMinDate = (e) => {
    if (e.target.value <= maxDateInput.current.value || !maxDateInput.current.value) {
      maxDateInput.current.min = e.target.value
      e.target.max = e.target.value
      SetMinDate(e.target.value)
    } else {
      e.target.value = maxDateInput.current.value
    }
  }

  let changeMaxDate = (e) => {
    if (e.target.value >= minDateInput.current.value || !minDateInput.current.value) {
      minDateInput.current.max = e.target.value
      e.target.min = e.target.value
      SetMaxDate(e.target.value)
    } else {
      e.target.value = minDateInput.current.value
    }
  }

  return (
    <section className={style.content}>
      <h2 className={style.content__title}>Мероприятия</h2>
      <div className={style.content__date}>
        <input type="date" max={maxDate} ref={minDateInput} onBlur={(e) => changeMinDate(e)} />
        <input type="date" min={minDate} ref={maxDateInput} onBlur={(e) => changeMaxDate(e)} />
      </div>
      <div className={style.content__filters}>
        <button className={[style.content__button, style.content__button_active].join(' ')}>Помощь организациям</button>
        <button className={style.content__button}>Помощь людям</button>
        <button className={[style.content__button, style.content__button_active].join(' ')}>Помощь городу</button>
        <button className={[style.content__button, style.content__button_clear].join(' ')}>Очистить</button>
      </div>
      <div className={style.content__list}>
        {
          totalCount != null ?
            events.map(el => <ContentEl name={el.name} date={el.date_start} img={el.image_path} />)
            : <></>
        }
      </div>
    </section>
  )
}

export default Content
