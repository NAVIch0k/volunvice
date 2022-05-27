import React from 'react'

// UI
import ButtonControls from '../../../../UI/ButtonControls/ButtonControls'

// SLIDER
import Slider from 'react-slick'

// IMAGES
import picture from '../../../../../assets/images/good-slide.png'

// STYLES
import style from './good.module.scss'

const Good = () => {
  const [slider, setSlider] = React.useState('')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className={style.good__dots}>
        <ul className={style.good__dots}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className={style.good__dot}></div>,
  }

  return (
    <section className={style.good}>
      <div className={style.good__good}>
        <h2 className={style.good__title}>Сделай доброе для тех, кто в этом нуждается</h2>
        <p className={style.good__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
          dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
        </p>
        <a className={style.good__link} href="/">
          Хочу помочь!
        </a>
      </div>
      <div className={style.good__slider}>
        <Slider {...settings} ref={(c) => setSlider(c)}>
          <img src={picture} alt="Новости" />
          <img src={picture} alt="Новости" />
          <img src={picture} alt="Новости" />
          <img src={picture} alt="Новости" />
          <img src={picture} alt="Новости" />
          <img src={picture} alt="Новости" />
        </Slider>
        <ButtonControls slider={slider} className={style.good__controls} />
      </div>
    </section>
  )
}

export default Good
