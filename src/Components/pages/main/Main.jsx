import React from 'react'
import About from './blocks/About/About'
import Help from './blocks/Help/Help'
import Menu from './blocks/Menu/Menu'
import Good from './blocks/Good/Good'
import Volunteers from './blocks/Volunteers/Volunteers'

// STYLES
import style from './main.module.scss'

const Main = () => {
  return (
    <>
      <Menu />
      <Help />
      <About />
      <Good />
      <Volunteers />
    </>
  )
}

export default Main
