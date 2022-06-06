import React, { useEffect } from 'react'
import { WithAuthRedirect } from "../../HOC/WithAuthRedirecr";
import { compose } from "redux";
import { GetAcoountEvents } from '../../../store/AccountEvents';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Menu from '../../Menu/Menu'
import Dashboard from './blocks/Dashboard/Dashboard'
import Events from './blocks/Events/Events'
import Info from './blocks/Info/Info'

// STYLES
import style from './profile.module.scss'

const Profile = () => {

  let dispatch = useDispatch()
  let init = useSelector(state => state.AccountEvents.total_count)
  const GetEvents = (arhive = false, direction = 'up') => {
    dispatch(GetAcoountEvents(arhive, direction))
  }

  useEffect(() => {
    GetEvents()
  }, [])
  return (
    <div className={style.page}>
      <Menu />

      <div className={style.columns}>
        <Info />

        <div className={style.content}>
          <Dashboard />
          {
            init != null ?
              <Events GetEvents={GetEvents} />
              : <></>
          }
        </div>
      </div>
    </div>
  )
}

export default compose(WithAuthRedirect)(Profile)
