import React from 'react'
import type { NextPage } from 'next'
import Divider from '@mui/material/Divider'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Image from 'next/Image'
import SearchIcon from '@mui/icons-material/Search';
const Index: NextPage = () => {

  return (
    <>
    <div className="row  white" dir="rtl">
      <div className="col-3 m-2" dir="ltr">
        <Image width="190" height={50} src="https://chtstudio.com/demo/ecomart/images/logo.png" alt="logo"/>
      </div>
      <div className="col-6 red" >
        <Button variant="contained" size="large"><SearchIcon/></Button>
        <TextField id="standard-basic" label="Outlined" variant="Outlined" />
      </div>
      <div className="col-3">
      </div>
    </div>
     <Divider/>
    </>
  )
}

export default Index
