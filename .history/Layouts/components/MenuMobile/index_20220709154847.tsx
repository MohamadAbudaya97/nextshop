import type { NextPage } from 'next'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Image from 'next/image'
import {indigo} from '@mui/material/colors'
const Index: NextPage = () => {
   
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar color='primary.light' style={{height:55}} position="sticky" dir="rtl">
        <div className='row '>
          <div className='col-2 mt-1'>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className='col-8 mt-1 h-75 d-flex justify-content-center align-items-sm-center'>
              <Image width="130" height="24" src="https://chtstudio.com/demo/ecomart/images/logo.png" alt="logo"/>
          </div>
          <div className='col-2 mt-1'>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="primary"
                >
                  <AccountCircle />
                </IconButton>
          </div>
        </div>
      </AppBar>
  );

}

export default Index
