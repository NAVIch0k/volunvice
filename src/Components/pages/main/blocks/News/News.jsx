import React from 'react'

// UI
import ButtonControls from '../../../../UI/ButtonControls/ButtonControls'

// SLIDER
import Slider from 'react-slick'

// IMAGES
import picture from '../../../../../assets/images/news.png'

// STYLES
import style from './news.module.scss'

const News = () => {
  const [slider, setSlider] = React.useState('')

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <section className={style.news}>
      <h2 className={style.news__title}>Новости волонтерской жизни</h2>
      <Slider {...settings} ref={(c) => setSlider(c)}>
        <div className={style.news__block}>
          <img src={picture} alt="Новости" />
          <div className={style.news__info}>
            <p className={style.news__data}>21 мая</p>
            <p className={style.news__text}>Прошла конференция “Познай себя”</p>
          </div>
        </div>
        <div className={style.news__block}>
          <img src={picture} alt="Новости" />
          <div className={style.news__info}>
            <p className={style.news__data}>21 мая</p>
            <p className={style.news__text}>Прошла конференция “Познай себя”</p>
          </div>
        </div>
        <div className={style.news__block}>
          <img src={picture} alt="Новости" />
          <div className={style.news__info}>
            <p className={style.news__data}>21 мая</p>
            <p className={style.news__text}>Прошла конференция “Познай себя”</p>
          </div>
        </div>
        <div className={style.news__block}>
          <img src={picture} alt="Новости" />
          <div className={style.news__info}>
            <p className={style.news__data}>21 мая</p>
            <p className={style.news__text}>Прошла конференция “Познай себя”</p>
          </div>
        </div>
        <div className={style.news__block}>
          <img src={picture} alt="Новости" />
          <div className={style.news__info}>
            <p className={style.news__data}>21 мая</p>
            <p className={style.news__text}>Прошла конференция “Познай себя”</p>
          </div>
        </div>
      </Slider>
      <ButtonControls slider={slider} />
    </section>
  )
}

export default News
