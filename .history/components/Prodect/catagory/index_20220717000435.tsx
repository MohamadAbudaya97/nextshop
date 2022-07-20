import type { NextPage } from 'next'
import Style from './index.module.scss'
import Image from 'next/image'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Paper from '@mui/material/Paper';
import type {Catagory} from '@Interface/prodect'
import Link from 'next/link'
interface Props{
   data:Catagory[]
}
const Section: NextPage<Props> = (Props) => {
   const data=[1,1,1,1,1,1]
    return(
     <>
     <div className="d-flex justify-content-between mt-4" dir="rtl">
        <p className="mt-3">الفئات الشعبية</p>
        <Button> <span style={{fontSize:18,color:"black"}}>جميع الفئات</span>  <ArrowBackIcon/> </Button>
     </div>
     <Divider/>     
     <div className="row" dir="rtl">
     {
      data.map((i)=>
      <>
         <div className="col-lg-4 col-sm-6 mt-4" key={i+"الفئات الشعبية"}>
            <Paper className={Style.item} elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
           </Paper>
        </div>
      </>
      )
     }
     </div>
     </>
    )
}
export default Section