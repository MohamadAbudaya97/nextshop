import { createContext } from "react";

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}
interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AppCtx = createContext<AppContextInterface | null>(null);

// Provider in your app

const initialState: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "thehappybug",
  url: "http://www.example.com",
};

function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        value: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        value: state.count - payload,
      };
    default:
      return state;
  }
}


export const AppSetting = ({children}) =>{
  const [state,dispatch] = useReducer(reducer:AnyAction,initialState)
}

