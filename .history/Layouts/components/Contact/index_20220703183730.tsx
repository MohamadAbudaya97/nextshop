import React from 'react'
import type { NextPage } from 'next'
import Divider from '@mui/material/Divider'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const Index: NextPage = () => {
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
<div className="container">
                    <div className="topbar-content">
                        <div className="left-content">
                            <ul className="global-list d-flex">
                                <li>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><img src="images/others/flag1.png" alt="Image" className="img-fluid"/>English</a></li>
                                            <li><a className="dropdown-item" href="#"><img src="images/others/flag2.png" alt="Image" className="img-fluid"/>France</a></li>
                                            <li><a className="dropdown-item" href="#"><img src="images/others/flag3.png" alt="Image" className="img-fluid"/>Jarman</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USD</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">USD</a></li>
                                            <li><a className="dropdown-item" href="#">BDT</a></li>
                                            <li><a className="dropdown-item" href="#">AUD</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right-content">
                            <ul className="global-list">
                                <li><span><i className="fas fa-phone-volume"></i></span><a href="#">Live Chat: +12 345 678 99</a></li>
                                <li><span><i className="far fa-user"></i></span><a href="sign-in.html">Sign In/ </a> <a href="sign-up.html"> Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>    </>
  )
}

export default Index
