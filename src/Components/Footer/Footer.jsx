import React from "react";
import {NavLink} from "react-router-dom";
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer_wrapper}>
                <div className={s.footer__link}>
                    <a href={'/'}>Главная</a>
                    <a href={'/'}>Страница</a>
                    <a href={'/'}>Страница</a>
                    <a href={'/'}>Страница</a>
                    <a href={'/auth'}>Войти</a>
                </div>
                <div className={s.footer__info}>
                    <p>volunvice@email.com</p>
                    <p>Volunvice © 2022</p>
                    <p>+7 988 386-23-87</p>
                </div>
            </div>
        </div>
    )
}

export default Footer