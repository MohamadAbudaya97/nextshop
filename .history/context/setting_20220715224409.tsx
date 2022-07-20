import { createContext, FunctionComponent, useReducer } from "react";

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}
interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}


const AppCtx = createContext<AppContextInterface | null>(null);

// Provider in your app

const initialState: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "thehappybug",
  url: "http://www.example.com",
};



// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}

// Our reducer function that uses a switch statement to handle our actions
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

// An example of using the `useReducer` hooks with our reducer function and an initial state
export const Counter: FunctionComponent = ({children}:any) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
        {children}
    </div>
    /*
    <div>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}>+</button>
    </div>
    */
  );
};

