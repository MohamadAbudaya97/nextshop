import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Styles from './index.module.scss'
import Paper from '@mui/material/Paper';

const Index: NextPage = () => {
  return (
    <>
    <div className="d-flex" dir="rtl">
      <Paper elevation={3}  className="m-5 w-25">
          <div className="w-100 ratio ratio-16x9">
            
          </div>
      </Paper>
     </div>
    </>
  )
}


export default Index
