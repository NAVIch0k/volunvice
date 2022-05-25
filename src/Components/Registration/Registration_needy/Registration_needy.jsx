import React, {useState} from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import s from '../Registration.module.scss'
import {RegistrationSend} from "../../../store/User";
import {useDispatch} from "react-redux";

const Registration_needy=()=>{

    let [type_id, setType] = useState('')
    let dispatch=useDispatch()

    let registr = (data) => {
        dispatch(RegistrationSend({...data, type_id}))
    }

    let choose_type = (id_type, id_but) => {
        setType(id_type)
        let chooseBut = document.getElementsByClassName(s.reg__types__active)
        while (chooseBut.length > 0) {
            chooseBut[0].classList.remove(s.reg__types__active)
        }
        document.getElementById(id_but).classList.toggle(s.reg__types__active)
    }

    return(
        <div className={s.reg}>
            <h2 className={s.reg__header}>Volunvice</h2>
            <h2 className={s.reg__name}>Регистрация</h2>
            <div className={s.reg__types}>
                <p id={'regType4'} onClick={() => choose_type(4, 'regType4')}>Мы компания</p>
                <p id={'regType3'} onClick={() => choose_type(3, 'regType3')}>Я гражданин</p>
            </div>
            <RegistrationForm onSubmit={registr}/>
        </div>
    )
}

export default Registration_needy