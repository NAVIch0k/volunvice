import React from 'react'
import Menu from '../../Menu/Menu'
import Content from './blocks/Content/Content'
import Header from './blocks/Header/Header'

// STYLES
import style from './eventItem.module.scss'

const EventItem = () => {
  return (
    <div className={style.page}>
      <Menu />
      <Header />
      <Content />
    </div>
  )
}

export default EventItem
