import type { NextPage } from 'next'
import Style from './index.module.scss'
import Image from 'next/image'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
const Section: NextPage = () => {
    return(
     <>
     <div className="d-flex justify-content-between" dir="rtl">
        <p>الفئات الشعبية</p>
        <Button>asd</Button>
     </div>
     <Divider/>
     </>
    )
}
export default Section