import type { NextPage } from 'next'
import Style from './index.module.scss'
import Image from 'next/image'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Paper from '@mui/material/Paper';

const Section: NextPage = () => {
    return(
     <>
     <div className="d-flex justify-content-between" dir="rtl">
        <p>الفئات الشعبية</p>
        <Button>جميع الفئات  <ArrowBackIcon/> </Button>
     </div>
     <Divider/>
     <div className="row margin" dir="rtl">
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>sad</span>
           </Paper>
        </div>
       <div className="col-4">
            <Paper className={Style.item} elevation={3}>
                sasadasd
           </Paper>
        </div>
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
                sasadasd
           </Paper>
        </div>
     </div>
     </>
    )
}
export default Section