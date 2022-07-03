import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

const Section: NextPage = () => {
  return (
     <Paper className={Style.Main}  elevation={3}>
               <span>الديكورات المنزلية والأجهزة المنزلية</span>
               <span className={Style.Image}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/c3.png" layout='fill' alt="sadasd"/>
               </span>
    </Paper>
  )
}

export default Section
