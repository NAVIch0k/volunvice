import React from 'react'

// STYLES
import style from './dashboard.module.scss'

const Dashboard = () => {
  return (
    <section className={style.dashboard}>
      <div className={style.dashboard__achievements}>
        <div className={style.dashboard__block}>
          <p className={style.dashboard__amount}>129</p>
          <p className={style.dashboard__type}>баллы</p>
        </div>
        <div className={style.dashboard__block}>
          <p className={style.dashboard__amount}>42</p>
          <p className={style.dashboard__type}>мероприятия</p>
        </div>
        <div className={style.dashboard__block}>
          <p className={style.dashboard__amount}>32</p>
          <p className={style.dashboard__type}>“спасибо”</p>
        </div>
      </div>
      <div className={style.dashboard__level}>
        <p className={style.dashboard__title}>Волонтер 5 уровня (название)</p>
        <p className={style.dashboard__subtitle}>Чаще всего участвовал в сфере развития города</p>
        <div className={style.dashboard__progress}>
          <i className={style.dashboard__state}></i>
        </div>
        <div className={style.dashboard__info}>
          <p className={style.dashboard__text}>20 мероприятий</p>
          <p className={style.dashboard__text}>50 мероприятий</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
