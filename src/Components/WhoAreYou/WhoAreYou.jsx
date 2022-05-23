import React from "react";
import s from './WhoAreYou.module.scss'
import WhoAreYouForm from "./WhoAreYouForm";

const WhoAreYou=()=>{
    return(
        <div className={s.whoareyou}>
            <h2 className={s.whoareyou__header}>Volunvice</h2>
            <WhoAreYouForm/>
            <a href="#" className={s.whoareyou__auth}>У меня есть аккаунт</a>
        </div>
    )
}

export default  WhoAreYou