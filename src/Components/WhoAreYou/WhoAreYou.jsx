import React, {useEffect} from "react";
import s from './WhoAreYou.module.scss'
import WhoAreYouForm from "./WhoAreYouForm";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const WhoAreYou = () => {

    let history =useHistory()

    let who = (data) => {
        if (!data) {
            alert('выберите параметр')
        } else {
            if (data=='User'){
                history.replace('/registration/needy')
            }
            else{
                history.replace('/registration/volunteer')
            }
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