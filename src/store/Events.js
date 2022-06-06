import { EventsAPI } from "../API/API"


const SETEVENTS='SETEVENTS'

let initialState = {
    events:[{
        account_id: null,
        event_id: null,
        name: '',
        description:'',
        date_start: '',
        date_finish: '',
        image_path:'',
    }],
    total_count:null
}

const Events = (state = initialState, action) => {
    switch (action.type) {
        case SETEVENTS: {
            return{...state,events:action.data.events,total_count:action.data.total_count}
        }
        default: {
            return state
        }
    }
}

const SetEventsAC=(data)=>({type:SETEVENTS,data})

export const GetEvents=(startDate,finishDate,types)=>async(dispatch)=>{
    try{
        let res=await EventsAPI.GetEvents(startDate,finishDate,types)
        dispatch(SetEventsAC(res.data))
    }
    catch(er){
        console.log(er);
    }
}

export default Events