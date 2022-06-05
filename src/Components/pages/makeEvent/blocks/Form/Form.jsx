import React from 'react'

// STYLE
import style from './form.module.scss'

const Form = () => {
  return (
    <form className={style.form}>
      <div className={style.form__field}>
        <label className={style.form__label} htmlFor="event-name">
          Название мероприятия
        </label>
        <input className={[style.form__text, style.form__text_name].join(' ')} id="event-name" type="text" placeholder="Введите название" />
      </div>

      <div className={style.form__date}>
        <div className={style.form__field}>
          <label className={style.form__label} htmlFor="start-date">
            Начало
          </label>
          <input className={[style.form__text, style.form__text_date].join(' ')} id="start-date" type="text" placeholder="26.05.2022" />
          <input className={[style.form__text, style.form__text_hours].join(' ')} type="text" placeholder="00.00" />
        </div>
        <div className={style.form__field}>
          <label className={style.form__label} htmlFor="finish-date">
            Окончание
          </label>
          <input className={[style.form__text, style.form__text_date].join(' ')} id="finish-date" type="text" placeholder="26.05.2022" />
          <input className={[style.form__text, style.form__text_hours].join(' ')} type="text" placeholder="00.00" />
        </div>
      </div>

      <div className={style.form__field}>
        <input className={[style.form__text, style.form__text_name].join(' ')} id="event-description" type="text" placeholder="Добавьте описание" />
        <label className={[style.form__label, style.form__label_down].join(' ')} htmlFor="event-description">
          Можно добавить еще 1500 символов
        </label>
      </div>

      <button className={style.form__submit} type="submit">
        Создать
      </button>
    </form>
  )
}

export default Form
