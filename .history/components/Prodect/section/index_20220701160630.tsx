import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
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
            {data.map((item,i)=><Item key={i}/>)}   
       </div>
    </div>
  )
}

export default Section
