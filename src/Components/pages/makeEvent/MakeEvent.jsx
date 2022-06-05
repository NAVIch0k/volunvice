import React from 'react'
import Form from './blocks/Form/Form'

// COMPONENTS
import Menu from '../../Menu/Menu'

// STYLE
import style from './index.module.scss'

const MakeEvent = () => {
  return (
    <section className={style.page}>
      <Menu />
      <Form />
    </section>
  )
}

export default MakeEvent
