import React from 'react'
import type { NextPage } from 'next'
import Divider from '@mui/material/Divider'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Style from './index.module.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Image from 'next/Image'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
const Index: NextPage = () => {

  return (
    <>
    <div className="row  white " dir="rtl">
      <div className="col-3 m-2" dir="ltr">
        <Image width="190" height={50} src="https://chtstudio.com/demo/ecomart/images/logo.png" alt="logo"/>
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center" >
        <TextField className={Style.SearchInput} dir="rtl" id="outlined-basic" label="البحث" variant="outlined" />
      </div>
      <div className="col-2 d-flex  align-items-center">
           <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
          <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
      </div>
    </div>
     <Divider/>
    </>
  )
}

export default Index
