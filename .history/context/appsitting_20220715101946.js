import {createContext} from 'react'

const SetingStateContext=createContext()

const SetingDispatchContext=createContext()

const getIsMobile = "getIsMobile"

const initialState = {
    isMobile:false
}

const reducer = (state,action)=>{
    switch (action.type){
        case setIsMobile:
            return{...state,...action.payload}
        default:
            throw new Error(`Unknown action : ${action.type}`)
    }
}

export const SettingProvider =({isMobile})=>{
const [state, dispatch] = useReducer(reducer, initialState, init)
initialState.isMobile=isMobile;
const getIsMobile=()=>initialState.isMobile

return<SetingDispatchContext>
    
      </SetingDispatchContext>
}