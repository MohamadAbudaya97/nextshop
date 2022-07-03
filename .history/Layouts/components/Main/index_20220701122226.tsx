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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Tooltip from '@mui/material/Tooltip';

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
        <Tooltip title="">
          <Button >   
            <Badge badgeContent={4} color="primary">
              <LocalMallIcon color="action" />
            </Badge>
          </Button>
        </Tooltip>
        <Tooltip title="">
          <Button >
            <Badge badgeContent={4} color="primary">
              <FavoriteBorderIcon color="action" />
            </Badge>
          </Button>
        </Tooltip>
        <Tooltip title="">
          <Button>
            <Badge badgeContent={4} color="primary">
              <CompareArrowsIcon color="action" />
            </Badge>
          </Button>
        </Tooltip>
      </div>
    </div>
     <Divider/>
    </>
  )
}

export default Index
