import React from 'react'
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export const WithAuthRedirect = (Component) => {
    const RedirectComponent = () => {
        const history = useHistory()
        const userID = useSelector(state => state.user.account_id)
        if (userID) {
            if (history.location.pathname === '/auth'||history.location.pathname.indexOf('/registration')!=-1) {
                history.replace('/')
            } else {
                return <Component/>
            }
        } else {
            if (history.location.pathname === '/auth') {
                return <Component/>
            }
            history.replace('/auth')
        }
    }
    return RedirectComponent
}