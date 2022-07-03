import React from 'react'
import type { NextPage } from 'next'
import Connect from './components/Contact'
import MainComponent from './components/Main'
import Menu from './components/Menu'
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <Connect/>
    <MainComponent/>

    {children}
    </>
  )
}

export default Main
