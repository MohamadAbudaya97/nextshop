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
    <div className="row container" dir="rtl">
      <div className="col">
        <span className="col">reg/sign</span>
        <span className="col">livechat</span>
      </div>
      <div className="col">
        <span>usd</span>
        <span>english</span>        
      </div>

    </div>
    {children}
    </>
  )
}

export default Main
