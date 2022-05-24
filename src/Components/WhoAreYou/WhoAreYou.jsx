import React, {useEffect} from "react";
import s from './WhoAreYou.module.scss'
import WhoAreYouForm from "./WhoAreYouForm";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {GetAllTypesAccount} from "../../store/TypeAccount";

const WhoAreYou = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllTypesAccount())
    },[])

    let who = (data) => {
        if (!data) {
            alert('выберите параметр')
        } else {
            console.log(data)
        }
    }

    return (
        <div className={s.whoareyou}>
            <h2 className={s.whoareyou__header}>Volunvice</h2>
            <WhoAreYouForm getWho={who}/>
            <NavLink to='/auth' className={s.whoareyou__auth}>У меня есть аккаунт</NavLink>
        </div>
    )
}

export default WhoAreYou