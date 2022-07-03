import React from 'react'
import type { NextPage } from 'next'
import Menu from '../components/menus/menu'
import Container from '@mui/material/Container'
import PersonIcon from '@mui/icons-material/Person';
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <div className="row  white" dir="rtl">
      <div className="col">
        <span> <PersonIcon/>تسجيل / تجيل الدخول</span>
        <span >livechat</span>
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