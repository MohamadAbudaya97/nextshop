import {createContext} from 'react'

const SetingStateContext=createContext()

const SetingDispatchContext=createContext()

const getIsMobile = "getIsMobile"

const reducer = (state,action)=>{
    switch (action.type){
        case getIsMobile:
            return{...state,...action.payload}
    }
}