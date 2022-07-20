import React from 'react'
import type { NextPage } from 'next'
import Admin  from './layoutComponents/admin'
import Mian  from './layoutComponents/main'
type Props = {
  children: React.ReactNode,
  userAgent:string,
  admin:string;
};
const Main: NextPage<Props> = ({children,userAgent,admin}:Props) => {
  return (
    <>
    {
        admin ? 
    <Admin userAgent={userAgent}>
        {children}
    </Admin>
        :   
    <Mian userAgent={userAgent}>
        {children}
    </Mian>
    }
    </>
  )
}

export default Main
