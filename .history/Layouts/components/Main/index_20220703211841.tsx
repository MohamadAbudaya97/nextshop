import React from 'react'
import type { NextPage } from 'next'
import Divider from '@mui/material/Divider'
import Style from './mainStyle.module.scss'
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Tooltip from '@mui/material/Tooltip';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



const Index: NextPage = () => {

  return (
    <>
    <div className="row  white w-100 " dir="rtl">
       <div className="col-3 m-2" dir="ltr">
        <Image width="190" height={50} src="https://chtstudio.com/demo/ecomart/images/logo.png" alt="logo"/>
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center" >
        <TextField className={Style.SearchInput} dir="rtl" id="outlined-basic" label="البحث" variant="outlined" />
      </div>
      <div className="col-2 d-flex  align-items-center">
        <Tooltip title="عربة التسوق" className='m-3'>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
              <LocalMallIcon />
            </StyledBadge>
          </IconButton>
        </Tooltip>
        <Tooltip title="قائمة الرغبات" className='m-3'>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={1} color="primary">
              <FavoriteBorderIcon />
            </StyledBadge>
        </IconButton>
        </Tooltip>
        <Tooltip title="قارن" className='m-3'>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="primary">
              <CompareArrowsIcon />
            </StyledBadge>
        </IconButton>
        </Tooltip>
      </div>

    </div>
     <Divider/>
    </>
  )
}

export default Index
/*
    <div className="row  white w-100 " dir="rtl">


      <div className="col-2 d-flex  align-items-center">
        <Tooltip title="عربة التسوق" className='m-3'>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
              <LocalMallIcon />
            </StyledBadge>
          </IconButton>
        </Tooltip>
        <Tooltip title="قائمة الرغبات" className='m-3'>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={1} color="primary">
              <FavoriteBorderIcon />
            </StyledBadge>
        </IconButton>
        </Tooltip>
        <Tooltip title="قارن" className='m-3'>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="primary">
              <CompareArrowsIcon />
            </StyledBadge>
        </IconButton>
        </Tooltip>
      </div>
    </div>
     <Divider/>


*/