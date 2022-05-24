import {AuthApi} from "../API/API";
import {stopSubmit} from "redux-form";

const REGISTRATION='REGISTRATION USER'
const DELETE='DELETE USER'

let initialState={
    account_id: null,
    f_name: '',
    l_name: '',
    email: '',
    type_id: null
}

const userReducer=(state=initialState,action)=>{
    switch (action.type){
        default:{
            return state
        }
    }
}

const SetUserDataAC = (data) => ({type: REGISTRATION, data})
const DeleteUserDataAC = () => ({type: DELETE})

export const RegistrationSend = (data) => async (dispatch) => {
    try {
        let response = await AuthApi.Registration(data)
        dispatch(SetUserDataAC(response))
    } catch (e) {
        console.log(e)
    }
}

export const LoginSend = (data) => async (dispatch) => {
    try {
        await AuthApi.Login(data)
        dispatch(SetUserDataAC(await AuthApi.CheckMe()))
    } catch (Response) {
        dispatch(stopSubmit('auth', { _error: Response.response.data.message }))
    }
}

export const DeleteSend = (id) => async (dispatch) => {
    try {
        await AuthApi.LogOut()
        dispatch(DeleteUserDataAC())
    } catch (e) {
        console.log(e)
    }
}

export const AuthMe = () => async (dispatch) => {
    try {
        dispatch(SetUserDataAC(await AuthApi.CheckMe()))
    } catch(e) {
        console.log(e)
    }
}

export default userReducer