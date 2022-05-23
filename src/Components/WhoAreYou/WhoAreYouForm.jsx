import React from "react";
import s from './WhoAreYouForm.module.scss'
import {Field, reduxForm} from "redux-form";

const Form = () => {
    return (
        <div className={s.form}>
            <h2 className={s.form__header}>Регистрация</h2>
            <Field id={'volunteerForm'} name={'volunteer'} type={'checkbox'} component='input'/>
            <label className={s.form__label} htmlFor="volunteerForm">Я хочу помочь</label>
            <Field id={'userForm'} name={'user'} type={'checkbox'} component='input'/>
            <label className={s.form__label} htmlFor="userForm">Мне нужна помощь</label>
            <button>Далее</button>
        </div>
    )
}

const WhoAreYouForm = reduxForm({form: 'whoAreYou'})(Form)

export default WhoAreYouForm