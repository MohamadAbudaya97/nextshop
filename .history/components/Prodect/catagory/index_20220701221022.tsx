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
     <div className="row" dir="rtl">
           <Paper className="col-3 m-2" elevation={3}>sad</Paper>
            <Paper className="col-4 m-2" elevation={3} >sad</Paper>
             <Paper className="col-4 m-2" elevation={3} >sadasd</Paper>
     </div>
     </>
    )
}
export default Section