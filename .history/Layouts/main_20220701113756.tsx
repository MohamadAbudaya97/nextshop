import React from 'react'
import type { NextPage } from 'next'
import MainConnect from './components/mainContact'
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <MainConnect/>
    {children}
    </>
  )
}

export default Main
