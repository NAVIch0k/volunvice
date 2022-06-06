import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetEvents } from '../../../store/Events'

// COMPONENTS
import Menu from '../../Menu/Menu'
import Content from './blocks/Content/Content'

// STYLES
import style from './events.module.scss'

const Events = () => {

  let dispatch=useDispatch()

  useEffect(()=>{
    dispatch(GetEvents())
  },[])

  return (
    <div className={style.page}>
      <Menu />
      <Content />
    </div>
  )
}

export default Events
