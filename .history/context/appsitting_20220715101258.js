import {createContext} from 'react'

const SetingStateContext=createContext()

const SetingDispatchContext=createContext()

const getIsMobile = "getIsMobile"

const reducer = (state,action)=>{
    switch (action.type){
        case getIsMobile:
            return{...state,...action.payload}
        default:
            throw new Error(`Unknown action : ${action.type}`)
    }
}

export const SettingProvider =({isMobile})=>{

}