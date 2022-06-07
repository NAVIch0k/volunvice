import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './AuthForm.module.scss'

const Form = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <h2>Войти</h2>
            <Field name={'email'} type={'email'} component={'input'} placeholder={'Электронная почта'} />
            <Field name={'password'} type={'password'} component={'input'} placeholder={'Пароль'} minLength={5} />
            <div className={s.form__checkbox}>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'} />
                <p>Запомнить меня</p>
            </div>
            <button type={'submit'}>Далее</button>
            {props.error ? <div className={s.form__error}>{props.error}</div> : <></>}
        </form>
    )
}

const AuthForm = reduxForm({ form: 'auth' })(Form)
export default AuthForm