import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Style from './menu.module.scss'
import Image  from 'next/image'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotesIcon from '@mui/icons-material/Notes';
const Index: NextPage = () => {

  return (
    <>
    <div className="row  white " dir="rtl" style={{height:50}}>
      <div className="col-3" dir="ltr">
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center red">
       <Button>asdsad</Button>
      </div>
    </div>
    <Divider/>
    </>
  )
}

export default Index
