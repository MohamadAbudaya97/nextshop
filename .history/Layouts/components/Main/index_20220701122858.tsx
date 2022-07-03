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

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



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
        <Tooltip title="عربة التسوق">
          <Button >   
            <Badge badgeContent={4} color="primary">
              <LocalMallIcon color="action" />
            </Badge>
          </Button>
        </Tooltip>
        <Tooltip title="قائمة الرغبات">
          <Button >
            <Badge badgeContent={4} color="primary">
              <FavoriteBorderIcon color="action" />
            </Badge>
          </Button>
        </Tooltip>
        <Tooltip title="قارن">
          <Button>
              <CompareArrowsIcon color="action" />
          </Button>
        </Tooltip>
      </div>
    </div>
     <Divider/>
    </>
  )
}

export default Index
