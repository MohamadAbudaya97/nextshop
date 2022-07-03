import React from 'react'
import type { NextPage } from 'next'
import Divider from '@mui/material/Divider'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const Index: NextPage = () => {

  return (
    <>
    <div className="row  white" dir="rtl">
      <div className="col d-flex justify-content-center align-items-center">
        <span className='m-2'><PermIdentityOutlinedIcon style={{color:'#007bff',fontSize:18}}/>
         <span className='hover m-1'>التسجيل</span>/
         <span className='hover m-1'>تسجيل الدخول</span>
         </span>
        <span className='m-2'><PhoneInTalkOutlinedIcon style={{color:'#007bff',fontSize:18}}/> <span className='hover m-1'>المحادثه المباشره</span> </span>
      </div>
      <div className="col d-flex justify-content-center">
        <span className='m-2 '>
        </span>
        <span className='m-2'>
        </span>        
      </div>
    </div>
     <Divider/>
    </>
  )
}

export default Index
