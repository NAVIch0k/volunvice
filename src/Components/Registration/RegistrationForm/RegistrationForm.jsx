import React from "react";
import {Field, reduxForm} from "redux-form";
import s from '../Registration.module.scss'

const Form=(props)=>{
    return(
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field name={'f_name'} component={'input'} type={'text'} placeholder={'Имя'}/>
            <Field name={'l_name'} component={'input'} type={'text'} placeholder={'Фамилия'}/>
            <Field name={'email'} component={'input'} type={'email'} placeholder={'Электронная почта'}/>
            <Field minLength={5} name={'password'} component={'input'} type={'password'} placeholder={'Пароль'}/>
            <button type={'submit'}>Зарегистрироваться</button>
            {props.error?<div className={s.form__error}>{props.error}</div>:<></>}
        </form>
    )
}

const RegistrationForm=reduxForm({form:'registration'})(Form)

export default RegistrationForm