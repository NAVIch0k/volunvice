import React from 'react'
import Menu from '../../Menu/Menu'
import Content from './blocks/Content/Content'

// STYLES
import style from './eventItem.module.scss'

const EventItem = () => {
  return (
    <div className={style.page}>
      <Menu />
      <Content />
    </div>
  )
}

export default EventItem
