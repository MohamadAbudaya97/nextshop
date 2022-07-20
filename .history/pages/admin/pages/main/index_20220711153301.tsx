import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Styles from './index.module.scss'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
const Index: NextPage = () => {
  return (
    <>
    <div className="d-flex" dir="rtl">
      <Link href="/admin/pages/main">
        <Paper elevation={3}  className="m-5 w-25 hover">
          <Typography variant='h5' textAlign="center">الصفحه الرئيسيه</Typography>
            <div className="w-100 ratio ratio-16x9">
                  <Image src="/image/pages/mainPage.png" alt="mainPage" layout='fill'/>
            </div>
        </Paper>
      </Link>
     </div>
    </>
  )
}


export default Index
