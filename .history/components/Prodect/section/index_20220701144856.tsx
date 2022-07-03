import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';

const Section: NextPage = () => {
  const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className={Style.Main}>
        <div className="d-flex justify-content-between m-3 margin" dir="rtl">
            <p className={Style.nameSection}>الفئات الشعبية</p>
            <Button className={Style.all}> <span style={{fontSize:18,color:"black"}}>جميع الفئات</span>  <ArrowBackIcon/> </Button>
        </div>
        <Divider/>

    </div>
  )
}

export default Section
