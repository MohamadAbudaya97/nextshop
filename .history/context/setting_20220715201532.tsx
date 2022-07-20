import { createContext } from "react";

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

export const AppSetting = () => (
  <AppCtx.Provider value={initialState}>...</AppCtx.Provider>
);

