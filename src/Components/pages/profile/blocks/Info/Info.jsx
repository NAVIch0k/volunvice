import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { DeleteSend } from "../../../../../store/User";

// STYLE
import style from './info.module.scss'

// IMAGES
import avatar from '../../../../../assets/images/avatar.png'

const Info = () => {

  const { f_name, l_name, type_id, photo_name } = useSelector(state => state.user)
  const { types } = useSelector(state => state.typesAccount)
  let typeName = types.filter(i => type_id == i.type_id)[0].name

  const dispatch = useDispatch()

  return (
    <section className={style.info}>
      <img className={style.info__avatar} src={photo_name ? 'http://188.225.83.101/api/static/accounts/img/' + photo_name : avatar} alt="Аватар" />
      {
        (type_id == 3 || type_id == 2) ?
          <><p>{f_name}</p>
          <p>ИНН:{l_name}</p></>
          :
          <p className={style.info__name}>{f_name} {l_name}</p>
      }
      <p className={style.info__status}>{typeName}</p>
      <button className={[style.info__button, style.info__button_edit].join(' ')}>Редактировать</button>
      <button className={[style.info__button, style.info__button_logout].join(' ')} onClick={() => dispatch(DeleteSend())}>Выйти</button>
    </section>
  )
}

export default Info
