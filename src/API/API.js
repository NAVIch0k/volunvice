import axios from "axios"

const instance = axios.create({
    baseURL: 'http://188.225.83.101/api/',
    withCredentials:true
})

export const AuthApi = {
    Registration(data) {
        return instance.post('accounts/sign',data)
    },
    Login(data) {
        return instance.put('accounts/sign',data)
    },
    LogOut() {
        return instance.delete('accounts/sign')
    },
    CheckMe() {
        return instance.get('accounts')
    }
}

export const TypesAccountApi = {
    GetTypes(){
        return instance.get('/accounts/types')
    }
}

export const AccountEventsAPI={
    GetEvents(arhive=false,direction='up'){
        return instance.get(`/accounts/events?archive=${arhive}&direction=${direction}`)
    }
}