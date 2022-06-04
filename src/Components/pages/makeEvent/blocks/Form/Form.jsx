import React from 'react'

// STYLE
import style from './form.module.scss'

const Form = () => {
  return (
    <form className={style.form}>
      <label>
        <input type="text" placeholder="Введите название" />
      </label>

      <div className={style.form__date}>
        <input type="text" placeholder="26.05.2022" />
        <input type="text" placeholder="00.00" />
      </div>
    </form>
  )
}

export default Form
