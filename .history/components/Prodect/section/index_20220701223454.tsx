import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';

const Section: NextPage = () => {
  return (
    <div className={Style.Main}>
        <div className="d-flex justify-content-between m-3 margin" dir="rtl">
            <p>الفئات الشعبية</p>
            <Button>جميع الفئات  <ArrowBackIcon/> </Button>
        </div>
        <Divider/>
    </div>
  )
}

export default Section
