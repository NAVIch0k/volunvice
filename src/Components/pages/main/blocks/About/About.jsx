import React from 'react'

// STYLES
import style from './about.module.scss'

// IMAGES
import image from '../../../../../assets/images/about-image.png'

const About = () => {
  return (
    <section className={style.about}>
      <div className={style.about__block}>
        <p className={style.about__info}>
          <b>Volunvice</b> - сервис, который поможет волонтерам сделать доброе дело; нуждающимся горожанам найти волонтеров; принять участие в социально
          значимой деятельности города.
        </p>
        <p className={style.about__offer}>
          Предлагаем посещать мероприятия, которые нуждаются в вашей поддержке. Оставив заявку на участие, с вами свяжутся организаторы и расскажут всё о
          дальнейшем сотрудничестве.
        </p>
      </div>
      <img className={style.about__image} src={image} alt="Картинка" />
    </section>
  )
}

export default About
