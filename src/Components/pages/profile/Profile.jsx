import React from 'react'

// COMPONENTS
import Menu from '../../Menu/Menu'
import Info from './blocks/Info/Info'

// STYLES
import style from './profile.module.scss'

const Profile = () => {
  return (
    <div className={style.page}>
      <Menu />

      <div className={style.columns}>
        <Info />

        <div></div>
      </div>
    </div>
  )
}

export default Profile
