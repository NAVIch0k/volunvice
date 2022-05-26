import React from 'react'

// STYLES
import style from './menu.module.scss'

const Menu = () => {
  return (
    <section className={style.menu}>
      <h2 className={style.menu__logo}>Volunvice</h2>
      <nav className={style.menu__nav}>
        <a className={style.menu__link} href="/">
          Главная
        </a>
        <a className={style.menu__link} href="/">
          Актуальные мероприятия
        </a>
        <a className={style.menu__link} href="/">
          Новости
        </a>
        <a className={[style.menu__link, style.menu__link_arrow].join(' ')} href="/">
          Выбрать город
        </a>
        <a className={[style.menu__link, style.menu__help].join(' ')} href="/">
          Хочу помочь!
        </a>
        <a className={[style.menu__link, style.menu__link_underline].join(' ')} href="/">
          Войти
        </a>
      </nav>
    </section>
  )
}

export default Menu
