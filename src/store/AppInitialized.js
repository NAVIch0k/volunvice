import {AuthMe} from "./User";


const SET_INITIALIZED = 'SET_INITIALIZED'

let initial_state = {
    initialized: false
}

const AppReducer = (state = initial_state, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return { ...state, initialized:true }
        }
        default:
            return state
    }
}


const initialized_success = () => ({ type: SET_INITIALIZED})


export const initialize_app= () => (dispatch) => {
    let promise=dispatch(AuthMe())
    Promise.all([promise]).then(()=>{
        dispatch(initialized_success())
    })
}

export default AppReducer