import React from 'react'
import type { NextPage } from 'next'
import MainConnect from './components/Contact'
import Menu from './components/Menu'
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <MainConnect/>
    <Menu/>
    {children}
    </>
  )
}

export default Main
