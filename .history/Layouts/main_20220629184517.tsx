import React from 'react'
import type { NextPage } from 'next'
import Menu from '../'
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default Main
