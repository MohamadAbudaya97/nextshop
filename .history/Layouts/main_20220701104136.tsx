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
      <div>
  <p >reg/sign</p>
      <p >livechat</p>
      </div>
    
      <p className="col">usd</p>
      <p className="col">english</p>
    </div>
    {children}
    </>
  )
}

export default Main
