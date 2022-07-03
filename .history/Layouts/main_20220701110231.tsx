import React from 'react'
import type { NextPage } from 'next'
import MyMenu from '../components/menus/menu'
import Container from '@mui/material/Container'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <div className="row  white" dir="rtl">
      <div className="col">
        <span className='m-3'> تسجيل / تجيل الدخول<PermIdentityOutlinedIcon style={{color:'#007bff',fontSize:18}}/></span>
        <span className='m-3'> المحادثه المباشره <PhoneInTalkOutlinedIcon style={{color:'#007bff',fontSize:18}}/></span>
      </div>
      <div className="col">
        <span className='m-3'>usd</span>
        <span className='m-3'>english</span>        
      </div>
    </div>
    {children}
    </>
  )
}

export default Main
