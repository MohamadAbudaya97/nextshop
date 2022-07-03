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
import DensityLargeOutlinedIcon from '@mui/icons-material/DensityLargeOutlined';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Test: NextPage = () => {

  return (
    <>
    
    <div className={Style.MainMenu}>
      <Container dir="rtl" className="row">
        <div className={Style.MenuDropMain}>
          <Button className={Style.MenuButton}>جميع التصنيفات</Button>
          <div className={Style.MenuDrop}>
          <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
              <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>جميع العروض</ListItemText>
              </MenuItem>
              <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>ازياء وملابس</ListItemText>
              </MenuItem>
              <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>الكترونيات</ListItemText>
              </MenuItem>
                <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>مكياج</ListItemText>
              </MenuItem >
                <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>كاميرا</ListItemText>
              </MenuItem>
                <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>المنزل</ListItemText>
              </MenuItem>
                <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>العاب و اطفال</ListItemText>
              </MenuItem>
                <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>الصحه والجمال</ListItemText>
              </MenuItem>
                <MenuItem className={Style.MenuItem}>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>حقائب</ListItemText>
              </MenuItem>
                <MenuItem>
                <ListItemText ><span style={{fontSize:18}}>روئيه جميع التصنيفات</span></ListItemText>
                <ArrowBackIcon/>
              </MenuItem>
            </MenuList>
          </Paper>
          </div>
        </div>
       <Button className={Style.MenuButton}>جميع التصنيفات</Button>
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
