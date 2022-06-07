import React from 'react'
import { useSelector } from 'react-redux'
import s from './DashboardOrganizer.module.scss'

const DashboardOrganizer = () => {

  const { involved,description } = useSelector(state => state.user)

    return (
        <div className={s.dashboard}>
            <div>
                <h3>Описание</h3>
                <p>{description}</p>
            </div>
            <div className={s.dashboard__involved}>
                <p>Проведено мероприятий</p>
                <div>{involved}</div>
            </div>
        </div>
    )
}

export default DashboardOrganizer