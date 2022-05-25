import {TypesAccountApi} from '../API/API'
const SetTypesAccount='SetTypesAccount'

let initialState=[
    {
        type_id: null,
        name: ''
    }
]

const typeAccReducer=(state=initialState,action)=>{
    switch (action.type){
        case SetTypesAccount:{
            return {...state,...action.data}
        }
        default:{
            return state
        }
    }
}

const SetTypesAC=(data)=>({type:SetTypesAccount,data})

export const GetAllTypesAccount=()=>async(dispatch)=>{
    try {
        let res = await TypesAccountApi.GetTypes()
        dispatch(SetTypesAC(res.data.types))
    }
    catch (e){
        console.log(e)
    }
}

export default typeAccReducer