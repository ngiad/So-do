
export const StateReducer = {
    error : false,
    loading :  false
}


export function FetchStatus (state, action) {
    switch (action.type) {
        case "FetchApi":
            return {...state, error : false,loading :  true}
        case "Done" :
            return {...state,error : false,loading :  false} 
        case "Error":
            return {...state,error :  true,loading : false}    
        default:
            return {...state}
    }
}