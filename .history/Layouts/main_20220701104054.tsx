import React from 'react'
import type { NextPage } from 'next'
import Menu from '../components/menus/menu'
import Container from '@mui/material/Container'

type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <div className="row">
      <p className="col">reg/sign</p>
      <p className="col">livechat</p>
      <p className="col">usd</p>
      <p className="col">english</p>
    </div>
    {children}
    </>
  )
}

export default Main
