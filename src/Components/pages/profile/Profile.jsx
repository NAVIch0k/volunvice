import React from 'react'

// COMPONENTS
import Menu from '../../Menu/Menu'

// STYLES
import style from './profile.module.scss'

// IMAGES
import avatar from '../../../assets/images/avatar.png'

const Profile = () => {
  return (
    <div className={style.page}>
      <Menu />

      <div className={style.columns}>
        <section className={style.info}>
          <img className={style.info__avatar} src={avatar} alt="Аватар" />
          <p className={style.info__name}>Максим Петров</p>
          <p className={style.info__status}>Волонтер</p>
          <button className={[style.info__button, style.info__button_edit].join(' ')}>Редактировать</button>
          <button className={[style.info__button, style.info__button_logout].join(' ')}>Выйти</button>
        </section>

        <div></div>
      </div>
    </div>
  )
}

export default Profile
