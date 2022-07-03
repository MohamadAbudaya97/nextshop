import React from 'react'
import type { NextPage } from 'next'
import Connect from './components/Contact'
import Menu from './components/Menu'
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <Connect/>
    
    <Menu/>
    {children}
    </>
  )
}

export default Main
