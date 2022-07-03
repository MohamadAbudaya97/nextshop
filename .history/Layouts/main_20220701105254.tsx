import React from 'react'
import type { NextPage } from 'next'
import Menu from '../components/menus/menu'
import Container from '@mui/material/Container'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <div className="row  white" dir="rtl">
      <div className="col">
        <span> تسجيل / تجيل الدخول<PermIdentityOutlinedIcon style={{color:'#007bff',fontSize:18}}/></span>

        <span > المحادثه المباشره</span>
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
