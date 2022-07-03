import type { NextPage } from 'next'
import Style from './menu.module.scss'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect } from 'react';
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
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useState } from 'react';
const Index: NextPage = () => {
    const [open,setOpen] = useState(true)
    const [position,setPosition]=useState(0)
    useEffect(() => {
    window.addEventListener('scroll', ()=>{
      const positions = window.pageYOffset
      setPosition(positions)
      if(positions==0){
        setOpen(true)
      }
      if(positions==1){
        setOpen(false)
      }
    }, { passive: true })
    }, []);
    const setOpens =()=>{
      if(position!=0){
        setOpen(!open)
      }
    }
  return (
  )
}

export default Index
