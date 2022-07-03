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
        <Button> <span style={{fontSize:18,color:"black"}}>جميع الفئات</span>  <ArrowBackIcon/> </Button>
     </div>
     <Divider/>
     <div className="row mt-2" dir="rtl">
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
           </Paper>
        </div>
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
           </Paper>
        </div>
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
           </Paper>
        </div>
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
           </Paper>
        </div>
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
           </Paper>
        </div>
        <div className="col-4">
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
           </Paper>
        </div>
     </div>
     </>
    )
}
export default Section