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
import Image from 'next/Image'
const Index: NextPage = () => {

  return (
    <>
    <div className="row  white" dir="rtl">
      <div className="col-3 blue">
        <Image width="191" height={50} src=""/>
      </div>
      <div className="col-6 red">
      </div>
      <div className="col-3 black">
      </div>
    </div>
     <Divider/>
    </>
  )
}

export default Index