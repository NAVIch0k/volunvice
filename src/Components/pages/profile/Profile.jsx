import React from 'react'

// COMPONENTS
import Menu from '../../Menu/Menu'
import Dashboard from './blocks/Dashboard/Dashboard'
import Events from './blocks/Events/Events'
import Info from './blocks/Info/Info'

// STYLES
import style from './profile.module.scss'

const Profile = () => {
  return (
    <div className={style.page}>
      <Menu />

      <div className={style.columns}>
        <Info />

        <div className={style.content}>
          <Dashboard />
          <Events />
        </div>
      </div>
    </div>
  )
}

export default Profile
