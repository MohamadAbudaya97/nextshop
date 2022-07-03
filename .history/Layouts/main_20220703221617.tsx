import React from 'react'
import type { NextPage } from 'next'
import Connect from './components/Contact'
import MainComponent from './components/Main'
import Menu from './components/Menu'
import {useWidth} from '@Hooks/screen'
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children,...props}:Props) => {
  const width = useWidth()
  return (
    <>
     <Connect /> 
     <MainComponent/>
     <Menu/>
    {children}
    </>
  )
}

export default Main
