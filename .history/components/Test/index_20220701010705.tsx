import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './index.module.scss'
import Image  from 'next/image'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import React from 'react';
import { Divider } from '@mui/material';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
const Test: NextPage = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <div className={Style.MainMenu}>
      <Container dir="rtl" >
           <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={Style.MenuButton}
      >
        جميع التصنيفات
      </Button>
      <Menu
        className={Style.Menu}
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem className={Style.MenuItem} onClick={handleClose}>   جميع الخيارات<Brightness4OutlinedIcon/></MenuItem>
        <Divider style={{margin:0,padding:0}}></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
        <Divider style={{margin:0,padding:0}}></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
        <Divider style={{margin:0,padding:0}} ></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
        <Divider style={{margin:0,padding:0}}></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
        <Divider style={{margin:0,padding:0}}></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
        <Divider style={{margin:0,padding:0}}></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
        <Divider style={{margin:0,padding:0}}></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
        <Divider style={{margin:0,padding:0}}></Divider>
        <MenuItem className={Style.MenuItem} onClick={handleClose}>Profile</MenuItem>
      </Menu>
      </Container>
    </div>
      <Swiper
      dir='rtl'
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={Style.MainSwiper}
    >
      <SwiperSlide>
        <div className={Style.Main}>
            <Image  src="https://chtstudio.com/demo/ecomart/images/bg/s5.png" alt="sadasd" width={219} height={219}/>
            <div>
              <h2>افضل واجود انواع البدلات للاعراس </h2>
              <p>اكثر من 50% تخفيض</p>
              <Button variant="outlined"><ArrowForwardIcon/> التسوق الان </Button>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default Test
