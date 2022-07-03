import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import Item from '@Components/Prodect/item'
const Section: NextPage = () => {
  const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className={Style.Main} dir="rtl">
        <div className="d-flex justify-content-between m-3 margin" dir="rtl">
            <p className={Style.nameSection}>الفئات الشعبية</p>
            <Button className={Style.all}> <span style={{fontSize:18,color:"black"}}>جميع الفئات</span>  <ArrowBackIcon/> </Button>
        </div>
        <Divider/>
       <div className="row m-3">
            {data.map((item,i)=><div key={i} className="col-4 h-100"><Item /></div>)}   
       </div>
    </div>
  )
}

export default Section
