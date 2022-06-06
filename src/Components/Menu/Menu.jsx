import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

// STYLES
import style from './menu.module.scss'

const Menu = () => {

  const { f_name, photo_name } = useSelector(state => state.user)

  return (
    <section className={style.menu}>
      <h2 className={style.menu__logo}>Volunvice</h2>
      <nav className={style.menu__nav}>
        <NavLink className={style.menu__link} to="/">
          Главная
        </NavLink>
        <NavLink className={style.menu__link} to="/events">
          Актуальные мероприятия
        </NavLink>
        <NavLink className={style.menu__link} to="/">
          Новости
        </NavLink>
        {/* <NavLink className={[style.menu__link, style.menu__link_arrow].join(' ')} to="/">
          Выбрать город
        </NavLink> */}
        <NavLink className={[style.menu__link, style.menu__help].join(' ')} to="/">
          Хочу помочь!
        </NavLink>
        {
          f_name ?
            <NavLink to={'/profile'}>
              <div className={style.menu__user}>
                <p>{f_name}</p>
                <img src={`http://188.225.83.101/api/static/accounts/img/${photo_name}`} alt="avatar" />
              </div>
            </NavLink>
            : <NavLink className={[style.menu__link, style.menu__link_underline].join(' ')} to="/auth">
              Войти
            </NavLink>
        }
      </nav>
    </section>
  )
}

export default Menu
