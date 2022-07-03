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
    <div className="row" dir="rtl">
      
      <div className="col">
        <p >reg/sign</p>
        <p >livechat</p>
      </div>
      <div className="col">
        <p>usd</p>
        <p>english</p>        
      </div>

    </div>
    {children}
    </>
  )
}

export default Main
