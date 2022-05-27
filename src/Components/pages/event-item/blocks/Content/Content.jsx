import React from 'react'

// STYLES
import style from './content.module.scss'

const Content = () => {
  return (
    <div className={style.content}>
      <h2 className={style.content__title}>Конференция “Познай себя и мир вокруг”</h2>
      <p className={style.content__date}>25.05.2022</p>
      <p className={style.content__about}>Организатор ООО “Холдинг Групп”</p>
    </div>
  )
}

export default Content
