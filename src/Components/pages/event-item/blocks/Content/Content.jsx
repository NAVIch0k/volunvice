import React from 'react'

// COMPONENTS
import Events from '../Events/Events'

// STYLES
import style from './content.module.scss'

// IMAGES
import picture from '../../../../../assets/images/event-picture.png'

const Content = () => {
  return (
    <section className={style.content}>
      <div className={style.content__column}>
        <div>
          <img className={style.content__image} src={picture} alt="Картнка" />
          <div className={style.content__container}>
            <h2 className={style.content__title}>Встречайте третий эпизод Презентации большого обновления amoCRM 2022! Сегодня мы представили Супер-поля.</h2>
            <p className={style.content__text}>
              Теперь можно ограничивать права на поля: руководитель решает, кто видит данные, кто может их редактировать, удалять. Права можно настраивать
              индивидуально для конкретного пользователя, для всего отдела или типовой роли.
            </p>
            <p className={style.content__text}>
              Появился новый тип поля «Формулы», с помощью которого можно брать значения других полей и выдавать результаты простейших математических операций.
              Прибыль или скидка в сделке рассчитываются автоматически.
            </p>
            <p className={style.content__text}>
              Появились связанные списки и зависимые поля - каталоги. Вам нужно отдельно хранить список марок машин, отдельно - моделей, отдельно -
              комплектаций, и чтобы они все зависели друг от друга? Никаких проблем. Искать и добавлять данные легко.
            </p>
          </div>
        </div>
        <Events />
      </div>
    </section>
  )
}

export default Content
