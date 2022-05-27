import React from 'react'
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export const WithAuthRedirect = (Component) => {
    const RedirectComponent = () => {
        const history = useHistory()
        const userID = useSelector(state => state.user.account_id)
        console.log(userID)
        if (userID) {
            return <Component/>
        } else {
            history.replace('/auth')
        }
    }
    return RedirectComponent
}