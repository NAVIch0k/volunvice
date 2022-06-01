import React from 'react'
import { useSelector } from 'react-redux'

// STYLES
import style from './dashboard.module.scss'

const Dashboard = () => {

  const { involved, gratitude } = useSelector(state => state.user)

  let prewLvl = 0, nextLvl = 0, actualLvl = 1, temp = 1

  let sumArr = arr => {
    let sum = 0
    arr.forEach(i => sum += i)
    return sum
  }
  let levels = []
  for (let i = 0; i < 10; i++) {
    if (i == 0) {
      levels.push(0)
    } else {
      levels.push(levels[i - 1] + 2 * temp++)
      if (involved >= sumArr(levels)) {
        ++actualLvl
      }
    }
  }
  for (const index in levels) {
    if (index == actualLvl) {
      prewLvl = involved - sumArr(levels.filter((i, ind) => ind < index))
      nextLvl = levels[index]
    }
  }

  React.useEffect(() => {
    let dashboardProgress=document.getElementById('dashboardProgress')
    let dashboardProgressPoint=document.getElementById('dashboardProgressPoint')
    let positionPoint=dashboardProgress.clientWidth/nextLvl*prewLvl
    dashboardProgressPoint.style.left=positionPoint+'px'
  }, [involved])
  



  return (
    <section className={style.dashboard}>
      <div className={style.dashboard__achievements}>
        <div className={style.dashboard__block}>
          <p className={style.dashboard__amount}>129</p>
          <p className={style.dashboard__type}>баллы</p>
        </div>
        <div className={style.dashboard__block}>
          <p className={style.dashboard__amount}>{involved}</p>
          <p className={style.dashboard__type}>мероприятия</p>
        </div>
        <div className={style.dashboard__block}>
          <p className={style.dashboard__amount}>{gratitude}</p>
          <p className={style.dashboard__type}>“спасибо”</p>
        </div>
      </div>
      <div className={style.dashboard__level}>
        <p className={style.dashboard__title}>Волонтер {actualLvl} уровня (название)</p>
        <p className={style.dashboard__subtitle}>Чаще всего участвовал в сфере развития города</p>
        <div className={style.dashboard__progress} id={'dashboardProgress'}>
          <i className={style.dashboard__state} id={'dashboardProgressPoint'}></i>
        </div>
        <div className={style.dashboard__info}>
          <p className={style.dashboard__text}>{prewLvl} мероприятий</p>
          <p className={style.dashboard__text}>{nextLvl} мероприятий</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
