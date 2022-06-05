import React from 'react'

// STYLE
import style from './form.module.scss'

const Form = () => {
  const [file, setFile] = React.useState('')

  const fileAdd = (e) => {
    const plus = document.querySelector(`.${style.form__iconAdd}`)
    console.log(e)
    if (e.target.files.length) {
      plus.classList.add(style.form__iconAdd_added)
      setFile(e.target.value.replace(/^.*[\\\/]/, ''))
    }
  }

  return (
    <form className={style.form}>
      <div className={style.form__column}>
        <div className={style.form__field}>
          <label className={style.form__label} htmlFor="event-name">
            Название мероприятия
          </label>
          <input className={[style.form__text, style.form__text_name].join(' ')} name="event-name" id="event-name" type="text" placeholder="Введите название" />
        </div>

        <div className={style.form__date}>
          <div className={style.form__field}>
            <label className={style.form__label} htmlFor="start-date">
              Начало
            </label>
            <input className={[style.form__text, style.form__text_date].join(' ')} name="start-date" id="start-date" type="text" placeholder="26.05.2022" />
            <input className={[style.form__text, style.form__text_hours].join(' ')} name="start-hours" id="start-hours" type="text" placeholder="00.00" />
          </div>
          <div className={style.form__field}>
            <label className={style.form__label} htmlFor="finish-date">
              Окончание
            </label>
            <input className={[style.form__text, style.form__text_date].join(' ')} name="finish-date" id="finish-date" type="text" placeholder="26.05.2022" />
            <input className={[style.form__text, style.form__text_hours].join(' ')} name="finish-hours" id="finish-hours" type="text" placeholder="00.00" />
          </div>
        </div>

        <div className={style.form__field}>
          <input
            className={[style.form__text, style.form__text_name].join(' ')}
            name="event-description"
            id="event-description"
            type="text"
            placeholder="Добавьте описание"
          />
          <label className={[style.form__label, style.form__label_down].join(' ')} htmlFor="event-description">
            Можно добавить еще 1500 символов
          </label>
        </div>

        <button className={style.form__submit} type="submit">
          Создать
        </button>
      </div>

      <div className={style.form__block}>
        <label className={style.form__label} htmlFor="file">
          Фотография
        </label>
        <div className={style.form__wrap}>
          <input onChange={fileAdd} className={style.form__file} type="file" id="file" />
          <label className={style.form__labelBlock} htmlFor="file">
            <span className={style.form__iconAdd}></span>
            <span className={style.form__fileText}>{file}</span>
          </label>
        </div>
      </div>
    </form>
  )
}

export default Form
