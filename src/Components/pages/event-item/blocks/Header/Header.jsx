import React from 'react'

// STYLES
import style from './header.module.scss'

const Header = () => {
  return (
    <section className={style.header}>
      <h2 className={style.header__title}>Конференция “Познай себя и мир вокруг”</h2>
      <p className={style.header__date}>25.05.2022</p>
      <p className={style.header__about}>Организатор ООО “Холдинг Групп”</p>
      <div className={style.header__collection}>
        <button className={[style.header__button, style.header__button_green].join(' ')}>
          Буду волонтером <i className={[style.header__icon, style.header__icon_check].join(' ')}></i>
        </button>
        <button className={[style.header__button, style.header__button_blue].join(' ')}>
          Перейти в чат <i className={[style.header__icon, style.header__icon_chat].join(' ')}></i>
        </button>
      </div>
    </section>
  )
}

export default Header
