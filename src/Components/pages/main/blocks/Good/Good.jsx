import React from 'react'

// STYLES
import style from './good.module.scss'

const Good = () => {
  return (
    <section className={style.good}>
      <div className={style.good__good}>
        <h2 className={style.good__title}>Сделай доброе для тех, кто в этом нуждается</h2>
        <p className={style.good__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
          dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
        </p>
        <a className={style.good__link} href="/">
          Хочу помочь!
        </a>
      </div>
      <div className={style.good__slider}></div>
    </section>
  )
}

export default Good
