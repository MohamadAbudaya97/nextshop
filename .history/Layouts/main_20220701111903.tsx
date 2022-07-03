import React from 'react'
import type { NextPage } from 'next'
import MyMenu from '../components/menus/menu'
import Container from '@mui/material/Container'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
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
    <div className="row  white" dir="rtl">
      <div className="col d-flex justify-content-center">
        <span className='m-2'><PermIdentityOutlinedIcon style={{color:'#007bff',fontSize:18}}/>
         <span className='hover'>التسجيل</span>/
         <span className='hover'>تسجيل الدخول</span>
         </span>
        <span className='m-2 hover'><PhoneInTalkOutlinedIcon style={{color:'#007bff',fontSize:18}}/> المحادثه المباشره </span>
      </div>
      <div className="col d-flex justify-content-center">
        <span className='m-2'>
                <Button
                id="Coins"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
               <ArrowDropDownRoundedIcon/><span style={{color:'black'}}>USD</span> 
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'Coins',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}><span>USD</span></MenuItem>
                <MenuItem onClick={handleClose}>IS</MenuItem> 
              </Menu>
        </span>
        <span className='m-2'>
                <Button
                id="languge"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
               <ArrowDropDownRoundedIcon/><span style={{color:'black'}}>العربيه</span>   
              </Button>
              <Menu
                id="languge"
                MenuListProps={{
                  'aria-labelledby': 'languge',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>العربيه</MenuItem>
                <MenuItem onClick={handleClose}>English</MenuItem> 
              </Menu>
        </span>        
      </div>
    </div>
    {children}
    </>
  )
}

export default Main
