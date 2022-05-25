import React from 'react'

// STYLES
import style from './buttons.module.scss'

const ButtonControls = ({ slider }) => {
  return (
    <div className={style.controls}>
      <button className={[style.controls__button, style.controls__button_left].join(' ')} onClick={() => slider.slickPrev()}></button>
      <button className={[style.controls__button, style.controls__button_right].join(' ')} onClick={() => slider.slickNext()}></button>
    </div>
  )
}

export default ButtonControls
