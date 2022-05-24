import React, {useState} from "react";
import s from './WhoAreYouForm.module.scss'

const WhoAreYouForm = (props) => {

    let [who,setWho]=useState('')

    return (
        <form className={s.form}>
            <h2 className={s.form__header}>Регистрация</h2>
            <label className={s.form__label}>
                <input type="radio" onClick={()=>setWho('Volunteer')}/>
                <span className={s.design}></span>
                <span>Я хочу помочь</span>
            </label>
            <label className={s.form__label}>
                <input type="radio" onClick={()=>setWho('User')}/>
                <span className={s.design}></span>
                <span>Мне нужна помощь</span>
            </label>
            <button type={'submit'} onClick={()=>{props.getWho(who);setWho('')}}>Далее</button>
        </form>
    )
}

export default WhoAreYouForm