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
  <div className="sticky-top mainMenu w-100" style={{position:"sticky",top:-2}}>
    <div className="d-md-flex d-none"> 
      <div className="row  white w-100 " dir="rtl">
        <div className="col-3 col-md-3 m-2" dir="ltr">
          <div className={Style.MenuDropMain} dir="rtl">
            <Button className={Style.MenuButton} onClick={setOpens}> <NotesIcon className="m-2"/> جميع التصنيفات </Button>
            <div className={Style.MenuDrop} style={{height:open?400:0,opacity:open?1:0}}>
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
        </div>
        <div className="col-8 col-md-5 d-flex  justify-content-center align-items-center" >

        </div>
        <div className="col-md-2 col-4 d-flex  align-items-center  ">
        </div>

      </div>
      <Divider/>
    </div>
  </div>
  )
}

export default Index
/*
    <div className="sticky-top mainMenu w-100" style={{position:"sticky",top:-2}}>
    <div className="row  white " dir="rtl" style={{height:50}}>
      <div className="col-3" dir="ltr">
        <div className={Style.MenuDropMain} dir="rtl">
          <Button className={Style.MenuButton} onClick={setOpens}> <NotesIcon className="m-2"/> جميع التصنيفات </Button>
          <div className={Style.MenuDrop} style={{height:open?400:0,opacity:open?1:0}}>
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
      </div>
      <div className="col-6 d-flex  align-items-center">
      <Button>المنزل</Button>
      <Button style={{color:"black"}}>التسوق</Button>
      <Button style={{color:"black"}}>قسيمة الهدية</Button>
      <Button style={{color:"black"}}>الصفحات</Button>
      <Button style={{color:"black"}}>مقالات</Button>
      <Button style={{color:"black"}}>معلومات عنا</Button>
      </div>
      <div className="col-2 d-flex  align-items-center">
      <Button><AddLocationIcon/>ترتيب المسار   </Button>
      </div>
    </div>
    <Divider/>
    </div>
*/