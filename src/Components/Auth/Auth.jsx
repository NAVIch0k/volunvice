import React from "react";
import s from './Auth.module.scss'
import AuthForm from "./AuthForm";
import {NavLink} from "react-router-dom";
import {LoginSend} from "../../store/User";
import {useDispatch} from "react-redux";

const Auth=()=>{

    const dispatch=useDispatch()

    let Auth=(data)=>{
        dispatch(LoginSend(data))
    }

    return(
        <div className={s.auth}>
            <h2 className={s.auth__header}>Volunvice</h2>
            <AuthForm onSubmit={Auth}/>
            <NavLink className={s.auth__reg} to={'/registration'}>Зарегистрироваться</NavLink>
        </div>
    )
}

export default Auth