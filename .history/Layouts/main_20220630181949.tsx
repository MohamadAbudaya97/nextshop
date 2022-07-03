import React from 'react'
import type { NextPage } from 'next'
import Menu from '../components/menus/menu'

type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <Menu/>
    {children}
    </>
  )
}

export default Main
