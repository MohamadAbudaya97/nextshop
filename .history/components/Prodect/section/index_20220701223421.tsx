import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Section: NextPage = () => {
  return (
    <div className={Style.Main}>
        <div className="d-flex justify-content-between margin" dir="rtl">
            <p>الفئات الشعبية</p>
            <Button>جميع الفئات  <ArrowBackIcon/> </Button>
        </div>
    </div>
  )
}

export default Section
