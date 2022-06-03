import { AccountEventsAPI } from "../API/API"


const SETEVENTS='SETACCOUNTEVENTS'

let initialState = {
    events:[{
        account_id: null,
        event_id: null,
        name: '',
        date_start: '',
        date_finish: '',
        gratitude: null,
        involved: null,
        date_subscribe: '',
        image_path:'',
        date_mark: null
    }],
    total_count:null
}

const AccountEvents = (state = initialState, action) => {
    switch (action.type) {
        case SETEVENTS: {
            return{...state,events:action.data.events,total_count:action.data.total_count}
        }
        default: {
            return state
        }
    }
}

const SetAccountEventsAC=(data)=>({type:SETEVENTS,data})

export const GetAcoountEvents=(arhive=false)=>async(dispatch)=>{
    try{
        let res=await AccountEventsAPI.GetEvents(arhive)
        dispatch(SetAccountEventsAC(res.data))
        // console.log(res);
    }
    catch(er){
        console.log(er);
    }
}

export default AccountEvents