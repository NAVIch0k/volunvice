import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { GetEvents } from '../../../../../store/Events'
import ContentEl from './ContentEl'

// STYLES
import style from './content.module.scss'

const Content = () => {

  let dispatch = useDispatch()

  const events = useSelector(state => state.Events.events)
  const totalCount = useSelector(state => state.Events.total_count)

  let minDateInput = useRef()
  let maxDateInput = useRef()

  let [minDate, SetMinDate] = useState('1990-01-01')
  let [maxDate, SetMaxDate] = useState('3000-01-01')
  let [typesEvents, SetTypesEvents] = useState([])

  //setting date
  let changeMinDate = (e) => {
    if (e.target.value <= maxDateInput.current.value || !maxDateInput.current.value) {
      maxDateInput.current.min = e.target.value
      e.target.max = e.target.value
      SetMinDate(e.target.value)
      dispatch(GetEvents(e.target.value, maxDate, typesEvents))
    } else {
      e.target.value = maxDateInput.current.value
    }
  }

  let changeMaxDate = (e) => {
    if (e.target.value >= minDateInput.current.value || !minDateInput.current.value) {
      minDateInput.current.max = e.target.value
      e.target.min = e.target.value
      SetMaxDate(e.target.value)
      dispatch(GetEvents(minDate, e.target.value, typesEvents))
    } else {
      e.target.value = minDateInput.current.value
    }
  }

  //setting button
  let controlSetting = (type) => {
    if (type == 'clear') {
      dispatch(GetEvents(minDate, maxDate, []))
      SetTypesEvents([])
    } else if (typesEvents.find(name => name == type)) {
      dispatch(GetEvents(minDate, maxDate, typesEvents.filter(name => name != type)))
      SetTypesEvents(typesEvents.filter(name => name != type))
    } else {
      dispatch(GetEvents(minDate, maxDate, [...typesEvents, type]))
      SetTypesEvents([...typesEvents, type])
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
        <button className={typesEvents.find(name => name == 1) ? style.content__button + ' ' + style.content__button_active : style.content__button} onClick={() => controlSetting(1)}>Помощь организациям</button>
        <button className={typesEvents.find(name => name == 2) ? style.content__button + ' ' + style.content__button_active : style.content__button} onClick={() => controlSetting(2)}>Помощь людям</button>
        <button className={typesEvents.find(name => name == 3) ? style.content__button + ' ' + style.content__button_active : style.content__button} onClick={() => controlSetting(3)}>Помощь городу</button>
        <button className={[style.content__button, style.content__button_clear].join(' ')} onClick={() => controlSetting('clear')}>Очистить</button>
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
