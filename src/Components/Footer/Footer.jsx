import React from "react";
import {NavLink} from "react-router-dom";
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer_wrapper}>
                <div className={s.footer__link}>
                    <NavLink to={'/main'}>Главная</NavLink>
                    <NavLink to={'/main#popularplace'}>Популярные места</NavLink>
                    <NavLink to={'#'}>Показать место</NavLink>
                    <NavLink to={'#'}>Избранное</NavLink>
                    <NavLink to={'#'}>Евгений</NavLink>
                </div>
                <div className={s.footer__info}>
                    <p>loctravel@lctrvl.com</p>
                    <p>+7 988 386-23-87</p>
                </div>
                <div className={s.footer__name}>
                    <p>Loctravel © 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Footer