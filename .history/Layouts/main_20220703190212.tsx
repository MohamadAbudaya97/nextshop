import React from 'react'
import type { NextPage } from 'next'
import Connect from './components/Contact'
import MainComponent from './components/Main'
import Menu from './components/Menu'
import {useWidth} from '@Hooks/width'

type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  const width = useWidth()
  return (
    <>
    { width > 768&& <Connect /> }  
    {children}
    </>
  )
}

export default Main
