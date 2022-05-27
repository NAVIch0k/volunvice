import React from 'react'

// COMPONENTS
import Menu from '../../Menu/Menu'
import Content from './blocks/Content/Content'

// STYLES
import style from './events.module.scss'

const Events = () => {
  return (
    <div className={style.page}>
      <Menu />
      <Content />
    </div>
  )
}

export default Events
